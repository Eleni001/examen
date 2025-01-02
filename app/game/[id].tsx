import BackgroundImage from "@/components/BackgroundImage";
import { themes } from "@/constants/themes";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
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
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(
        withTiming(10, { duration: 300 }),
        withTiming(0, { duration: 300 }),
        withTiming(10, { duration: 300 }),
        withTiming(0, { duration: 300 }),
        withTiming(10, { duration: 300 }),
        withTiming(0, { duration: 300 }),
        withDelay(500, withTiming(0, { duration: 0 }))
      ),
      500
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <BackgroundImage source={theme?.background}>
      <Animated.View style={animatedStyle}>
        <Image
          source={theme?.cover}
          style={styles.cover}
          resizeMode="contain"
        />
      </Animated.View>
    </BackgroundImage>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    marginTop: height * 0.23,
    width: width * 0.6,
    height: height * 0.6,
  },
});
