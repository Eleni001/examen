import BackgroundImage from "@/components/BackgroundImage";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <BackgroundImage source={require("../assets/images/background.png")}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("/menu")}>
          <Image
            source={require("../assets/images/play-button.png")}
            style={styles.buttonImage}
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  buttonImage: {
    width: width * 0.08,
    height: width * 0.08,
    top: height * 0.2,
  },
  logo: {
    width: width * 0.6,
    height: width * 0.25,
    top: height * 0.15,
  },
});
