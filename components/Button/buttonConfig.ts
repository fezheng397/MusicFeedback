import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
import { theme } from 'constants/theme';
import { ButtonSize, ButtonTheme } from './types';
import { rem } from 'polished';
import { label2, label3 } from 'components/Typography';

type ButtonThemeOptions = {
  color: string;
  backgroundColor: string;
  outlineColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  hoverOutlineColor?: string;
  focusOutlineColor?: string;
};

function createButtonTheme({
  color,
  backgroundColor,
  outlineColor,
  hoverColor,
  hoverBackgroundColor,
  hoverOutlineColor,
  focusOutlineColor,
}: ButtonThemeOptions): FlattenSimpleInterpolation {
  return css`
    color: ${color};
    background: ${backgroundColor};
    ${outlineColor && `border: ${rem(2)} solid ${outlineColor};`}

    :hover {
      ${hoverColor && `color: ${hoverColor};`}
      ${hoverBackgroundColor && `background: ${hoverBackgroundColor};`}
      ${hoverOutlineColor && `border: ${rem(2)} solid ${hoverOutlineColor};`}
    }

    :focus {
      ${focusOutlineColor &&
      `box-shadow: 0px 0px 0px ${rem(2)} ${focusOutlineColor};`}
    }
  `;
}

export const primaryButtonTheme = createButtonTheme({
  color: theme.text.alt.primary,
  backgroundColor: theme.background.brand,
  hoverBackgroundColor: theme.color.brand.dark,
  focusOutlineColor: theme.color.brand.light24,
});

export const secondaryButtonTheme = createButtonTheme({
  color: theme.text.primary,
  backgroundColor: theme.background.primary,
  outlineColor: theme.text.primary,
  hoverColor: theme.text.active,
  hoverOutlineColor: theme.background.brand,
  focusOutlineColor: theme.color.brand.base,
});

export const tertiaryButtonTheme = createButtonTheme({
  color: theme.text.primary,
  backgroundColor: 'transparent',
  hoverBackgroundColor: theme.background.tertiary,
  focusOutlineColor: theme.background.brand,
});

export const linkButtonTheme = createButtonTheme({
  color: theme.text.primary,
  backgroundColor: 'transparent',
  hoverColor: theme.text.active,
});

export const unstyledButtonTheme = createButtonTheme({
  color: theme.text.primary,
  backgroundColor: 'transparent',
});

export const themeMap: {
  [key in ButtonTheme]: FlattenSimpleInterpolation;
} = {
  primary: primaryButtonTheme,
  secondary: secondaryButtonTheme,
  tertiary: tertiaryButtonTheme,
  link: linkButtonTheme,
  unstyled: unstyledButtonTheme,
};

type SizeConfig = {
  borderRadius: string;
  text: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  height?: string;
  padding: string;
};

const sizeConfig: { [key in ButtonSize]: SizeConfig } = {
  sm: {
    borderRadius: rem(8),
    text: label3,
    height: rem(44),
    padding: `0 ${rem(16)}`,
  },
  md: {
    borderRadius: rem(8),
    text: label2,
    height: rem(48),
    padding: `0 ${rem(20)}`,
  },
  lg: {
    borderRadius: rem(10),
    text: label2,
    height: rem(52),
    padding: `0 ${rem(24)}`,
  },
  link: {
    borderRadius: rem(8),
    text: label2,
    padding: '0',
  },
  icon: {
    borderRadius: '50%',
    text: label2,
    padding: '0',
  },
  pill: {
    borderRadius: rem(500),
    text: label2,
    height: rem(52),
    padding: `0 ${rem(24)}`,
  },
};

export function getButtonSizeStyling(size: ButtonSize) {
  return css`
    ${sizeConfig[size].text}
    font-weight: 500;
    border-radius: ${sizeConfig[size].borderRadius};
    padding: ${sizeConfig[size].padding};
    ${sizeConfig[size].height &&
    css`
      height: ${sizeConfig[size].height};
    `}
  `;
}
