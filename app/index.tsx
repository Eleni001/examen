import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <BackgroundImage source={require("../assets/images/background.png")}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("/menu")}>
          <Image
            source={require("../assets/images/new-play.png")}
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
    width: width * 0.7,
    height: height * 0.6,
    top: height * 0.13,
  },
});
