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
  containerWidth: number;
  objects: ObjectItem[];
}

export const themes: Theme[] = [
  {
    id: "1",
    title: "Farm",
    image: require("../assets/images/menu-item1.png"),
    background: require("../assets/images/background-t1.png"),
    cover1: require("../assets/images/left-cover1.png"),
    cover2: require("../assets/images/right-cover1.png"),
    coverSound: require("../assets/sounds/cover-sound1.mp3"),
    containerWidth: 0.19,
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
  {
    id: "2",
    title: "Numbers",
    image: require("../assets/images/menu-item1.png"),
    background: require("../assets/images/background-t2.png"),
    cover1: require("../assets/images/l.png"),
    cover2: require("../assets/images/r.png"),
    coverSound: require("../assets/sounds/cover-sound1.mp3"),
    containerWidth: 0.12,
    objects: [
      {
        image: require("../assets/images/zero.png"),
        sound: require("../assets/sounds/dog-wosha.mp3"),
        width: 0.067,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/one.png"),
        sound: require("../assets/sounds/tenchel.mp3"),
        width: 0.06,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/two.png"),
        sound: require("../assets/sounds/cow-lamm.mp3"),
        width: 0.068,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/three.png"),
        sound: require("../assets/sounds/cat-demet.mp3"),
        width: 0.072,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/four.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.085,
        height: 0.11,
        top: 0.73,
      },
      {
        image: require("../assets/images/five.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.06,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/six.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.062,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/seven.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.06,
        height: 0.11,
        top: 0.73,
      },
      {
        image: require("../assets/images/eight.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.058,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/nine.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.066,
        height: 0.1,
        top: 0.73,
      },
      {
        image: require("../assets/images/ten.png"),
        sound: require("../assets/sounds/horse-feres.mp3"),
        width: 0.08,
        height: 0.1,
        top: 0.73,
      },
    ],
  },
];
