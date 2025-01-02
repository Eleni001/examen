import {
  Dimensions,
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    /* margin: 30, */
    borderRadius: 10,
    overflow: "hidden",
    width: width * 0.2,
    height: height * 0.35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
