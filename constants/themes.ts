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
  coverSound: AVPlaybackSource;
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
    coverSound: require("../assets/sounds/coverSound1.mp3"),
    objects: [
      {
        image: require("../assets/images/dog.png"),
        sound: require("../assets/sounds/dog-wosha.mp3"),
        width: 0.063,
        height: 0.1,
        top: 0.73,
      
      },
      {
        image: require("../assets/images/bunnie.png"),
        sound: require("../assets/sounds/tenchel.mp3"),
        width: 0.03,
        height: 0.07,
        top: 0.79,
      },
      {
        image: require("../assets/images/cow.png"),
        sound: require("../assets/sounds/cow-lamm.mp3"),
        width: 0.09,
        height: 0.13,
        top: 0.67,
      },
      {
        image: require("../assets/images/cat.png"),
        sound: require("../assets/sounds/cat-demet.mp3"),
        width: 0.041,
        height: 0.06,
        top: 0.82,
      },
      {
        image: require("../assets/images/horse3.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.08,
        height: 0.14,
        top: 0.66,
      },
    ],
  },
];
