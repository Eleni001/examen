import { ImageBackground, StyleSheet } from "react-native";

interface BackgroundImageProps {
  source: any;
  children: React.ReactNode;
  style?: object;
}

export default function BackgroundImage({
  source,
  children,
  style = {},
}: BackgroundImageProps) {
  return (
    <ImageBackground
      source={source}
      style={[styles.background, style]}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
