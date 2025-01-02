// pages/menu.tsx
import BackgroundImage from "@/components/BackgroundImage";
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
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 60,
    margin: 30,
  },
});
