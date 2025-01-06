import BackgroundImage from "@/components/BackgroundImage";
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 350,
    height: 100,
  },
});
