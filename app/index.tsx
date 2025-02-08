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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8lRjTUR0_z-lsG-ZimW2NYrs-5g4iTRI",
  authDomain: "examen-8f884.firebaseapp.com",
  databaseURL: "https://examen-8f884-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "examen-8f884",
  storageBucket: "examen-8f884.firebasestorage.app",
  messagingSenderId: "429442135170",
  appId: "1:429442135170:web:2d9f7372b83d98d87ff09b",
  measurementId: "G-BHN706S0LF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
