// pages/menu.tsx
import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import ThemeCard from "../components/ThemeCard";
import { themes } from "../constants/themes";

export default function Menu() {
  const router = useRouter();

  return (
    <BackgroundImage source={require("../assets/images/background.png")}>
      <View style={styles.container}>
        {themes.map((theme) => (
          <ThemeCard
            key={theme.id}
            imageSource={theme.image}
            onPress={() => router.push(`/game/${theme?.id}`)}
          />
        ))}
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flexDirection: "row", */
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "2%",
    marginVertical: width * 0.2,
    marginHorizontal: height * 0.2,
  },
});
