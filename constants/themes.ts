import { AVPlaybackSource } from "expo-av";

export interface ObjectItem {
  image: object;
  sound: AVPlaybackSource;
  width: number;
  height: number;
  top: number;
}

export interface Theme {
  id: string;
  title: string;
  image: object;
  background: object;
  cover1: object;
  cover2: object;
  objects: ObjectItem[];
}

export const themes: Theme[] = [
  {
    id: "1",
    title: "Farm",
    image: require("../assets/images/farm.png"),
    background: require("../assets/images/background1.png"),
    cover1: require("../assets/images/cover.png"),
    cover2: require("../assets/images/cover.png"),
    objects: [
      {
        image: require("../assets/images/dog.png"),
        sound: require("../assets/sounds/dog-bark.mp3"),
        width: 0.07,
        height: 0.09,
        top: 0.733,
      },
      {
        image: require("../assets/images/bunnie.png"),
        sound: require("../assets/sounds/dog-bark.mp3"),
        width: 0.04,
        height: 0.06,
        top: 0.78,
      },
      {
        image: require("../assets/images/cow.png"),
        sound: require("../assets/sounds/sound.mp3"),
        width: 0.14,
        height: 0.13,
        top: 0.67,
      },
    ],
  },
  /* {
    id: "2",
    title: "Colors",
    image: require("../assets/images/colors.png"),
    background: require("../assets/images/colors.png"),
  },
  {
    id: "3",
    title: "Kitchen",
    image: require("../assets/images/kitchen.png"),
    background: require("../assets/images/colors.png"),
  }, */
];
