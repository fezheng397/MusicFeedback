import { Color, Theme } from './types';
import { rem } from 'polished';

function createColorPalette(
  dark: string,
  base: string,
  light70: string,
  light45: string,
  light30: string,
  light10: string
) {
  return {
    dark,
    base,
    light70,
    light45,
    light30,
    light10,
  };
}

const color: Color = {
  black: {
    dark: '#252525',
    base: '#161226',
  },
  gray: createColorPalette(
    '#484554',
    '#787878',
    '#A1A1A1',
    '#C2C2C2',
    '#D7D7D7',
    '#F7F7F7'
  ),
  brand: createColorPalette(
    '#382E85',
    '#6D64E7',
    '#776BCD',
    '#958CD8',
    '#C6C1EA',
    '#F0F0FD'
  ),
  violet: createColorPalette(
    '#382E85',
    '#6D64E7',
    '#776BCD',
    '#958CD8',
    '#C6C1EA',
    '#F0F0FD'
  ),
  blue: createColorPalette(
    '#2F64A7',
    '#46B4FA',
    '#7ECBFC',
    '#ACDDFD',
    '#C8E9FE',
    '#EDF7FF'
  ),
  green: createColorPalette(
    '#11866B',
    '#19C9A1',
    '#5ED9BD',
    '#98E7D5',
    '#BAEFE3',
    '#E8FAF6'
  ),
  salmon: createColorPalette(
    '#BE4655',
    '#FF7587',
    '#FF9EAB',
    '#FFC1C9',
    '#FFD6DB',
    '#FFF1F3'
  ),
  orange: createColorPalette(
    '#DC5240',
    '#FF9070',
    '#FFB19B',
    '#FFCDBF',
    '#FFDED4',
    '#FFF4F1'
  ),
  gold: createColorPalette(
    '#C8833E',
    '#FFC45D',
    '#FFD68E',
    '#FFE4B6',
    '#FFEDCE',
    '#FFF9EF'
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
    secondary: color.gray.light10,
    tertiary: color.gray.light30,
    alt: {
      primary: color.black.base,
      secondary: color.gray.dark,
      tertiary: color.gray.base,
    },
    brand: color.brand.base,
    highlight: color.brand.light10,
    overlay: color.opacity.black64,
  },
  border: {
    brand: color.brand.base,
    primary: color.opacity.black08,
  },
  color: color,
  divider: { primary: color.opacity.black08 },
  focus: {
    brand: color.brand.light70,
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
      secondary: color.gray.light10,
      tertiary: color.gray.light30,
    },
    error: color.salmon.base,
    success: color.green.base,
  },
  transition: transition,
};
