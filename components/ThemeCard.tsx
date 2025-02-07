import { width } from "@/constants/constants";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface ThemeCardProps {
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

export default function ThemeCard({ imageSource, onPress }: ThemeCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    width: width * 0.297,
    height: width * 0.21,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
