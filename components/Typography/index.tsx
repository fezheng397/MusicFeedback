import Typography, { TypographyInterfaceProps } from './Typography';
import React, { ComponentType } from 'react';
import { css } from 'styled-components';
import { TypographySetting, colorMap, weightMap } from './types';
import { rem } from 'polished';

export type ExtendedTypographyProps = TypographyInterfaceProps & {
  forwardedAs: keyof JSX.IntrinsicElements | ComponentType<any>;
};

const headerFont = 'secondary';
const headerWeight = 'bold';

const regularFont = 'primary';
const regularWeight = 'normal';

const typographySettings: { [name: string]: TypographySetting } = {
  header1: {
    as: 'h1',
    color: 'bold',
    font: headerFont,
    lineHeight: 56,
    size: 48,
    weight: headerWeight,
  },
  header2: {
    as: 'h2',
    color: 'bold',
    font: headerFont,
    lineHeight: 48,
    size: 40,
    weight: headerWeight,
  },
  header3: {
    as: 'h3',
    color: 'bold',
    font: headerFont,
    lineHeight: 40,
    size: 32,
    weight: headerWeight,
  },
  header4: {
    as: 'h4',
    color: 'bold',
    font: headerFont,
    lineHeight: 36,
    size: 28,
    weight: headerWeight,
  },
  header5: {
    as: 'h5',
    color: 'bold',
    font: headerFont,
    letterSpacing: 0.32,
    lineHeight: 32,
    size: 24,
    weight: headerWeight,
  },
  header6: {
    as: 'h6',
    color: 'bold',
    font: headerFont,
    letterSpacing: 0.26,
    lineHeight: 24,
    size: 20,
    weight: headerWeight,
  },
  paragraph1: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.22,
    lineHeight: 26,
    size: 18,
    weight: regularWeight,
  },
  paragraph2: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.22,
    lineHeight: 24,
    size: 16,
    weight: regularWeight,
  },
  paragraph3: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.22,
    lineHeight: 22,
    size: 15,
    weight: regularWeight,
  },
  paragraph4: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.22,
    lineHeight: 20,
    size: 14,
    weight: regularWeight,
  },
  label1: {
    as: 'p',
    color: 'primary',
    font: headerFont,
    letterSpacing: 0.22,
    lineHeight: 26,
    size: 20,
    weight: regularWeight,
  },
  label2: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.24,
    lineHeight: 24,
    size: 18,
    weight: regularWeight,
  },
  label3: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    letterSpacing: 0.28,
    lineHeight: 22,
    size: 17,
    weight: regularWeight,
  },
  label4: {
    as: 'p',
    color: 'primary',
    font: regularFont,
    lineHeight: 20,
    size: 16,
    weight: regularWeight,
  },
};

function createTypographyComponent(
  name: keyof typeof typographySettings
): React.FC<TypographyInterfaceProps> {
  function Component({
    as,
    children,
    color,
    weight,
    ...props
  }: TypographyInterfaceProps) {
    return (
      <Typography
        as={as || typographySettings[name].as}
        color={color || typographySettings[name].color}
        font={typographySettings[name].font}
        letterSpacing={typographySettings[name].letterSpacing}
        lineHeight={typographySettings[name].lineHeight}
        size={typographySettings[name].size}
        weight={weight || typographySettings[name].weight}
        {...props}
      >
        {children}
      </Typography>
    );
  }
  return Component;
}

function createMixin(name: keyof typeof typographySettings) {
  const typographySetting = typographySettings[name];
  return css`
    ${({ theme }) =>
      css`
        color: ${colorMap[typographySetting.color] || theme.text.primary};
        font-family: ${theme.font[typographySetting.font] ||
        theme.font.primary};
        font-size: ${rem(typographySetting.size) || rem(16)};
        font-weight: ${weightMap[typographySetting.weight]};

        ${typographySetting.letterSpacing &&
        css`
          letter-spacing: ${rem(typographySetting.letterSpacing)};
        `}

        ${typographySetting.lineHeight &&
        css`
          line-height: ${rem(typographySetting.lineHeight)};
        `}
      `}
  `;
}

export const Header1 = createTypographyComponent('header1');

export const Header2 = createTypographyComponent('header2');

export const Header3 = createTypographyComponent('header3');

export const Header4 = createTypographyComponent('header4');

export const Header5 = createTypographyComponent('header5');

export const Header6 = createTypographyComponent('header6');

export const Paragraph1 = createTypographyComponent('paragraph1');

export const Paragraph2 = createTypographyComponent('paragraph2');

export const Paragraph3 = createTypographyComponent('paragraph3');

export const Paragraph4 = createTypographyComponent('label4');

export const Label1 = createTypographyComponent('label1');

export const Label2 = createTypographyComponent('label2');

export const Label3 = createTypographyComponent('label3');

export const Label4 = createTypographyComponent('label4');

export const header1 = createMixin('header1');

export const header2 = createMixin('header2');

export const header3 = createMixin('header3');

export const header4 = createMixin('header4');

export const header5 = createMixin('header5');

export const header6 = createMixin('header6');

export const paragraph1 = createMixin('paragraph1');

export const paragraph2 = createMixin('paragraph2');

export const paragraph3 = createMixin('paragraph3');

export const paragraph4 = createMixin('paragraph4');

export const label1 = createMixin('label1');

export const label2 = createMixin('label2');

export const label3 = createMixin('label3');

export const label4 = createMixin('label4');
