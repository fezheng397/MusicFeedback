import { theme } from 'constants/theme';
import { ComponentType } from 'react';

export interface TypographyStyledProps {
  color?: string;
  weight?: number;
}

export const weightMap = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export type Weight = keyof typeof weightMap;

export const colorMap = {
  currentColor: 'currentColor',
  bold: theme.text.bold,
  primary: theme.text.primary,
  secondary: theme.text.secondary,
  tertiary: theme.text.tertiary,
  active: theme.text.active,
  altPrimary: theme.text.alt.primary,
  altSecondary: theme.text.alt.secondary,
  altTertiary: theme.text.alt.tertiary,
};

export type Color = keyof typeof colorMap;

export type Font = keyof typeof theme.font;

export type Spacing = keyof typeof theme.spacing;

export type TypographySetting = {
  as: keyof JSX.IntrinsicElements | ComponentType<any>;
  color: Color;
  font: Font;
  lineHeight: number;
  letterSpacing?: number;
  size: number;
  weight: Weight;
};
