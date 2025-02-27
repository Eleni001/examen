import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Index() {
  const router = useRouter();
  const buttonZoom = useSharedValue(1);

  useEffect(() => {
    buttonZoom.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 700 }),
        withTiming(1, { duration: 700 })
      ),
      -1,
      true
    );
  }, []);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonZoom.value }],
  }));

  return (
    <BackgroundImage source={require("../assets/images/background.png")}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.playButton}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Play Button"
          accessibilityHint="Tap to start the game"
          onPress={() => router.push("/menu")}
        >
          <Animated.Image
            source={require("../assets/images/play-button.png")}
            style={[styles.buttonImage, animatedButtonStyle]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel="Lesan Logo"
        />
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  playButton: {
    position: "absolute",
    top: height * 0.04,
    width: width * 0.12,
    height: width * 0.12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.5,
    top: height * 0.25,
  },
});
