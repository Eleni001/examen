import BackgroundImage from "@/components/BackgroundImage";
import { height, width } from "@/constants/constants";
import { themes } from "@/constants/themes";
import { useRouter } from "expo-router";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeCard from "../components/ThemeCard";

const firebaseConfig = {
  apiKey: "AIzaSyD8lRjTUR0_z-lsG-ZimW2NYrs-5g4iTRI",
  authDomain: "examen-8f884.firebaseapp.com",
  databaseURL:
    "https://examen-8f884-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "examen-8f884",
  storageBucket: "examen-8f884.firebasestorage.app",
  messagingSenderId: "429442135170",
  appId: "1:429442135170:web:2d9f7372b83d98d87ff09b",
  measurementId: "G-BHN706S0LF",
};

export default function Menu() {
  const router = useRouter();
  const [themesEnabled, setThemesEnabled] = useState<string[]>([]);
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  useEffect(() => {
    const themesRef = ref(database, "themesEnabled");

    onValue(themesRef, (snapshot) => {
      const data: string = snapshot.val();
      const themesList: string[] = JSON.parse(data);
      console.log(themesList + "themesList");
      if (themesList) {
        setThemesEnabled(themesList);
      } else {
        setThemesEnabled([]);
      }
    });
  }, []);

  return (
    <BackgroundImage source={require("../assets/images/background.png")}>
      <View style={styles.container}>
        {themesEnabled.map((themeId) => {
          const theme = themes.find((t) => t.id == themeId) || themes[0];
          return (
            <ThemeCard
              key={theme.id}
              imageSource={theme.image}
              onPress={() => router.push(`/game/${theme?.id}`)}
              accessible={true}
              accessibilityLabel={`Theme: ${theme.title}`}
              accessibilityHint={`Double tap to select the ${theme.title} theme`}
              accessibilityRole="button"
            />
          );
        })}
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "2%",
    marginVertical: width * 0.1,
    marginHorizontal: height * 0.2,
  },
});
