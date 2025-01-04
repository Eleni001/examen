import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { themes } from "@/constants/themes";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
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
  const theme = themes.find((t) => t.id === id);
  const rotaionAnimation = useSharedValue(0);
  const leftImageGlide = useSharedValue(0);
  const rightImageGlide = useSharedValue(0);
  const [isTouched, setIsTouched] = useState(false);
  const backgroundScale = useSharedValue(1);
  const backgroundTranslateY = useSharedValue(0);

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
    setIsTouched(true);
    rotaionAnimation.value = withTiming(0, { duration: 300 });
    leftImageGlide.value = withTiming(width * -0.08, { duration: 500 });
    rightImageGlide.value = withTiming(width * 0.08, { duration: 500 });
    backgroundScale.value = withDelay(500, withTiming(2, { duration: 700 }));
    backgroundTranslateY.value = withDelay(
      500,
      withTiming(height * -0.2, { duration: 700 })
    );
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
            style={[styles.image, leftImageStyle]}
            resizeMode="contain"
          />
          <Animated.Image
            source={theme?.cover2}
            style={[styles.image, rightImageStyle]}
            resizeMode="contain"
          />
        </Animated.View>
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
  },
  image: {
    width: width * 0.13,
    marginTop: height * 0.55,
  },
});
