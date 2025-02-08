import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { themes } from "@/constants/themes";
import { Audio } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
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
  const [coverSound, setCoverSound] = useState<Audio.Sound | null>(null);
  const [currentObject, setCurrentObject] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function loadedObjectSound() {
      const { sound } = await Audio.Sound.createAsync(
        theme.objects[currentObject].sound
      );
      setSound(sound);
    }
    loadedObjectSound();
    return () => {
      sound?.unloadAsync();
    };
  }, [currentObject]);
  useEffect(() => {
    async function loadedCoverSound() {
      const { sound } = await Audio.Sound.createAsync(theme.coverSound);
      await sound.setIsLoopingAsync(true);
      setCoverSound(sound);
    }
    loadedCoverSound();

    return () => {
      sound?.unloadAsync();
    };
  }, [theme]);

  useEffect(() => {
    if (!isTouched) {
      rotaionAnimation.value = withRepeat(
        withSequence(
          withTiming(-3, { duration: 300 }),
          withTiming(3, { duration: 300 }),
          withTiming(-3, { duration: 300 }),
          withTiming(3, { duration: 300 }),
          withTiming(-3, { duration: 300 }),
          withTiming(3, { duration: 300 }),
          withTiming(0, { duration: 300 }),
          withDelay(500, withTiming(0, { duration: 0 }))
        ),
        -1,
        true
      );

      if (coverSound) {
        coverSound.playAsync();
      } else {
        console.log("cover sound is null");
      }
    } else {
      coverSound?.stopAsync();
    }
  }, [isTouched, coverSound]);

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

  const containerAnimationStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotaionAnimation.value}deg` }],
  }));

  const leftImageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftImageGlide.value }],
  }));

  const rightImageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightImageGlide.value }],
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
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => {
            coverSound?.stopAsync();
            router.push("/menu");
          }}
        >
          <Image
            source={require("../../assets/images/return.png")}
            style={styles.return}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.container,
            { width: width * theme.containerWidth },
            containerAnimationStyle,
          ]}
          onTouchStart={handleTouch}
          onPointerDown={handleTouch}
        >
          <Animated.Image
            source={theme?.cover1}
            style={[styles.image, leftImageStyle]}
            resizeMode="cover"
          />
          <Animated.Image
            source={theme?.cover2}
            style={[styles.image, rightImageStyle]}
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
  returnButton: {
    position: "absolute",
    top: height * 0.06,
    left: width * 0.02,
    zIndex: 10,
  },
  return: {
    width: width * 0.05,
    height: width * 0.05,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
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
