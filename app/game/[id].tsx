import BackgroundImage from "@/components/BackgroundImage";
import { themes } from "@/constants/themes";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Game() {
  const { id } = useLocalSearchParams();
  const theme = themes.find((t) => t.id === id);
  return (
    <BackgroundImage source={theme?.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{theme?.title}</Text>
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
  },
  title: {
    fontSize: 76,
    fontWeight: "bold",
    margin: 10,
    color: "red",
  },
});
