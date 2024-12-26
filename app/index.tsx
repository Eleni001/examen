import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => router.push("/menu")}
      >
        <Image
          source={require("../assets/images/play-button.png")}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.15,
    resizeMode: "contain",
  },
  playButton: {
    marginBottom: height * 0.1,
  },
  buttonImage: {
    width: width * 0.3,
    height: height * 0.08,
    resizeMode: "contain",
  },
});
