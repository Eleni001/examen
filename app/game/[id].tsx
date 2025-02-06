import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { themes } from "@/constants/themes";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Game() {
  const { id } = useLocalSearchParams();
  const theme = themes.find((t) => t.id === id) || themes[0];
  const rotaionAnimation = useSharedValue(0);
  const leftImageGlide = useSharedValue(0);
  const rightImageGlide = useSharedValue(0);
  const [isTouched, setIsTouched] = useState(false);
  const backgroundScale = useSharedValue(1);
  const backgroundTranslateY = useSharedValue(0);
  const [objectImage, setObjectImage] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [currentObject, setCurrentObject] = useState(0);

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        theme.objects[currentObject].sound
      );
      setSound(sound);
    }
    loadSound();
    return () => {
      sound?.unloadAsync();
    };
  }, [currentObject]);

  useEffect(() => {
    if (!isTouched) {
      rotaionAnimation.value = withRepeat(
        withSequence(
          withTiming(10, { duration: 300 }),
          withTiming(0, { duration: 300 }),
          withTiming(10, { duration: 300 }),
          withTiming(0, { duration: 300 }),
          withTiming(10, { duration: 300 }),
          withTiming(0, { duration: 300 }),
          withDelay(500, withTiming(0, { duration: 0 }))
        ),
        -1,
        true
      );
    }
  }, [isTouched]);

  const handleTouch = () => {
    if (isTouched) {
      setObjectImage(false);
      backgroundScale.value = withTiming(1, { duration: 700 });
      backgroundTranslateY.value = withTiming(0, { duration: 700 });
      leftImageGlide.value = withTiming(0, { duration: 500 });
      rightImageGlide.value = withTiming(0, { duration: 500 });
      setIsTouched(false);
      setCurrentObject((prevObject) => (prevObject + 1) % theme.objects.length);
    } else {
      setIsTouched(true);
      rotaionAnimation.value = withTiming(0, { duration: 300 });
      leftImageGlide.value = withTiming(width * -0.08, { duration: 500 });
      rightImageGlide.value = withTiming(width * 0.08, { duration: 500 });
      backgroundScale.value = withDelay(500, withTiming(2, { duration: 700 }));
      backgroundTranslateY.value = withDelay(
        500,
        withTiming(height * -0.22, { duration: 700 })
      );
      setTimeout(() => {
        setObjectImage(true);
        sound?.playAsync();
      }, 700);
    }
  };

  const leftImageStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotaionAnimation.value}deg` },
      { translateX: leftImageGlide.value },
    ],
  }));

  const rightImageStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotaionAnimation.value}deg` },
      { translateX: rightImageGlide.value },
    ],
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: backgroundScale.value },
      { translateY: backgroundTranslateY.value },
    ],
  }));

  return (
    <Animated.View style={[styles.outerContainer, backgroundStyle]}>
      <BackgroundImage source={theme?.background}>
        <Animated.View style={styles.container} onPointerDown={handleTouch}>
          <Animated.Image
            source={theme?.cover1}
            style={[styles.image /* leftImageStyle */]}
            resizeMode="cover"
          />
          <Animated.Image
            source={theme?.cover2}
            style={[styles.image /* rightImageStyle */]}
            resizeMode="cover"
          />
        </Animated.View>

        {objectImage && (
          <Image
            source={theme.objects[currentObject].image}
            style={[
              styles.objectImage,
              {
                width: width * theme.objects[currentObject].width,
                height: width * theme.objects[currentObject].height,
                top: height * theme.objects[currentObject].top,
              },
            ]}
          />
        )}
      </BackgroundImage>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    width: width * 0.19,
    height: height * 0.32,
    top: height * 0.64,
    left: width * 0.407,
  },
  image: {
    height: "100%",
    flex: 1,
  },
  objectImage: {
    position: "absolute",
    left: width * 0.44,
  },
});
