export enum sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum colors {
  orange = "orange",
  purple = "purple",
  transparent = "transparent",
}

export enum allColors {
  orange = "#FF5C00",
  purple = "#5326D6",
  white = "#FFFFFF",
  darkGray90 = "#1A1A1A",
  gray80 = "#333333",
  mediumGray70 = "#4D4D4D",
  lightGray50 = "#808080",
  subGray30 = "#B3B3B3",
  lineGray10 = "#E6E6E6",
}

export type allColorsType =
  | "orange"
  | "purple"
  | "white"
  | "darkGray90"
  | "gray80"
  | "mediumGray70"
  | "lightGray50"
  | "subGray30"
  | "lineGray10";

export type iconType =
  | "squares"
  | "bitcoin"
  | "exclamation-circle"
  | "instagram"
  | "user-circle"
  | "fimb"
  | "search"
  | "x-circle"
  | "clock-refresh"
  | "layers"
  | "safe-shield"
  | "cube"
  | "house"
  | "triple-dots"
  | "arrow-circle"
  | "doubt-circle"
  | "active-cube"
  | "linkedin"
  | "bitcoin"
  | "external"
  | "double-users"
  | "youtube"
  | "download"
  | "heart"
  | "config"
  | "facebook"
  | "small-cubes"
  | "wallet"
  | "exchange"
  | "coin-stack"
  | "plus"
  | "wire-globe"
  | "eye"
  | "bell"
  | "copy"
  | "document"
  | "upload"
  | "calendar"
  | "bar-graph";

export enum inputTypes {
  email = "email",
  text = "text",
  password = "password",
}

export enum typoTypes {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
}

export enum fontSizeTypes {
  f10 = 10,
  f12 = 12,
  f14 = 14,
  f16 = 16,
  f18 = 18,
  f20 = 20,
  f22 = 22,
  f24 = 24,
  f28 = 28,
  f32 = 32,
  f36 = 36,
  f64 = 64,
  f75 = 75,
}
