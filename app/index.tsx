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
        <TouchableOpacity onPress={() => router.push("/menu")}>
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
  buttonImage: {
    width: width * 0.1,
    height: width * 0.1,
    top: height * 0.155,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.5,
    top: height * 0.15,
  },
});
