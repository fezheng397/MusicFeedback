export type Background = {
  primary: string;
  secondary: string;
  tertiary: string;
  alt: Alt;
};

export type Border = {
  brand: string;
  primary: string;
};

type Alt = {
  primary: string;
};

type ColorPalette = {
  dark: string;
  base: string;
  light72: string;
  light56: string;
  light24: string;
  light08: string;
};

type BlackPalette = {
  dark: string;
  base: string;
};

type OpacityPalette = {
  black08: string;
  black32: string;
  black64: string;
  black80: string;
};

export type Color = {
  black: BlackPalette;
  gray: ColorPalette;
  brand: ColorPalette;
  white: string;
  opacity: OpacityPalette;
};

export type Divider = {
  primary: string;
};

export type Focus = {
  brand: string;
};

export type Font = {
  primary: string;
  secondary: string;
};

export type ShadowObject = {
  up: string;
  down: string;
};

export type Shadow = {
  small: ShadowObject;
};

export type Text = {
  bold: string;
  primary: string;
  secondary: string;
  tertiary: string;
  active: string;
  alt: Alt;
};

export type Transition = {
  average: string;
};

export type Theme = {
  background: Background;
  border: Border;
  color: Color;
  divider: Divider;
  focus: Focus;
  font: Font;
  text: Text;
  shadow: Shadow;
  transition: Transition;
};
