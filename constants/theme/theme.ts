import { Color, Theme } from './types';
import { rem } from 'polished';

function createColorPalette(
  dark: string,
  base: string,
  light72: string,
  light56: string,
  light24: string,
  light08: string
) {
  return {
    dark,
    base,
    light72,
    light56,
    light24,
    light08,
  };
}

const color: Color = {
  black: {
    dark: '#131B2A',
    base: '#25292F',
  },
  gray: createColorPalette(
    '#4B4E53',
    '#74767A',
    '#9B9C9F',
    '#B1B2B5',
    '#DEDEDF',
    '#F2F2F2'
  ),
  brand: createColorPalette(
    '#0A3895',
    '#105EFA',
    '#538BFB',
    '#79A5FC',
    '#C6D8FE',
    '#ECF2FF'
  ),
  white: '#FFFFFF',
  opacity: {
    black08: 'rgba(0, 0, 0, 0.08)',
    black32: 'rgba(0, 0, 0, 0.32)',
    black64: 'rgba(0, 0, 0, 0.64)',
    black80: 'rgba(0, 0, 0, 0.80)',
  },
};

const font = {
  primary: `'Euclid-Circular', sans-serif`,
  secondary: `'Euclid-Circular', sans-serif`,
};

const shadows = {
  small: {
    up: `rgba(36, 63, 97, 0.1) 0px -1px 4px,
    rgba(36, 63, 97, 0.16) 0px 0px 1px`,
    down: `rgba(36, 63, 97, 0.1) 0px 1px 4px,
    rgba(36, 63, 97, 0.16) 0px 0px 1px`,
  },
  medium: {
    up: `rgba(36, 63, 97, 0.1) 0px -2px 8px,
    rgba(36, 63, 97, 0.16) 0px 1px 4px`,
    down: `rgba(36, 63, 97, 0.1) 0px 2px 8px,
    rgba(36, 63, 97, 0.16) 0px 1px 4px`,
  },
};

const spacing = {
  none: 0,
  // spacing
  spacing1: rem(2),
  spacing2: rem(4),
  spacing3: rem(8),
  spacing4: rem(12),
  spacing5: rem(16),
  spacing6: rem(20),
  spacing7: rem(24),
  spacing8: rem(32),
  spacing9: rem(40),
  spacing10: rem(48),
  // layout
  layout1: rem(16),
  layout2: rem(20),
  layout3: rem(24),
  layout4: rem(32),
  layout5: rem(40),
  layout6: rem(48),
  layout7: rem(64),
  layout8: rem(96),
  layout9: rem(160),
};

const transition = {
  average: 'all 150ms ease-in-out',
};

export const theme = {
  background: {
    primary: color.white,
    secondary: color.gray.light08,
    tertiary: color.gray.light24,
    alt: {
      primary: color.black.base,
      secondary: color.gray.dark,
      tertiary: color.gray.base,
    },
    brand: color.brand.base,
    highlight: color.brand.light08,
    overlay: color.opacity.black64,
  },
  border: {
    brand: color.brand.base,
    primary: color.opacity.black08,
  },
  color: color,
  divider: { primary: color.opacity.black08 },
  focus: {
    brand: color.brand.light72,
  },
  font: font,
  shadow: shadows,
  spacing: spacing,
  text: {
    bold: color.black.dark,
    primary: color.black.base,
    secondary: color.gray.dark,
    tertiary: color.gray.base,
    active: color.brand.base,
    alt: {
      primary: color.white,
      secondary: color.gray.light08,
      tertiary: color.gray.light24,
    },
  },
  transition: transition,
};
