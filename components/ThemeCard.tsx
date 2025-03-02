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
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: string;
}

export default function ThemeCard({
  imageSource,
  onPress,
  accessible,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}: ThemeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
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
