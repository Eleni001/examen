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
    image: require("../assets/images/menu-item.png"),
    background: require("../assets/images/background-t1.png"),
    cover1: require("../assets/images/leftCover.png"),
    cover2: require("../assets/images/rightCover.png"),
    objects: [
      {
        image: require("../assets/images/dog.png"),
        sound: require("../assets/sounds/dog-wosha.mp3"),
        width: 0.07,
        height: 0.09,
        top: 0.733,
      },
      {
        image: require("../assets/images/bunnie.png"),
        sound: require("../assets/sounds/tenchel.mp3"),
        width: 0.0463,
        height: 0.06,
        top: 0.78,
      },
      {
        image: require("../assets/images/cow.png"),
        sound: require("../assets/sounds/cow-lamm.mp3"),
        width: 0.14,
        height: 0.13,
        top: 0.67,
      },
      {
        image: require("../assets/images/cat.png"),
        sound: require("../assets/sounds/cat-demet.mp3"),
        width: 0.07,
        height: 0.065,
        top: 0.77,
      },
      {
        image: require("../assets/images/horse.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.115,
        height: 0.11,
        top: 0.71,
      },
    ],
  },
];
