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

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: width * 0.13,
    marginTop: height * 0.55,
  },
});
