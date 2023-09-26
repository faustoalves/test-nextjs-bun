export interface IconProps {
  icon: IconList;
}

export enum IconList {
  NONE = "none",
  PHONE = "phone",
  ARROW_LEFT = "arrow_left",
  ARROW_RIGHT = "arrow_right",
  ARROW_DOWN = "arrow_down",
  ARROW_UP = "arrow_up",
  TWENTY_FOUR = "twenty_four",
  LINK = "link",
  CREMATION = "cremation",
  BURIAL = "burial",
  TREE_FUNERAL = "treeFuneral",
  SEA_FUNERAL = "seaFuneral",
}

export enum DrawingIconList {
  NONE = "none",
  CANDLE = "candle",
  EURO = "euro",
  CHECK = "check",
  ONE = "one",
  TWO = "two",
  THREE = "three",
  FOUR = "four",
  FIVE = "five",
  SIX = "six",
  SEVEN = "seven",
  EIGHT = "eight",
  NINE = "nine",
  TEN = "ten",
}

export const NumberedDrawList: DrawingIconList[] = [
  DrawingIconList.ONE,
  DrawingIconList.TWO,
  DrawingIconList.THREE,
  DrawingIconList.FOUR,
  DrawingIconList.FIVE,
  DrawingIconList.SIX,
  DrawingIconList.SEVEN,
  DrawingIconList.EIGHT,
  DrawingIconList.NINE,
  DrawingIconList.TEN,
];
