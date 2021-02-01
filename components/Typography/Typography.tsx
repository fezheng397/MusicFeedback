import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { colorMap, Color, Font, Spacing, weightMap, Weight } from './types';
import { rem } from 'polished';

type MarginProps = {
  margin?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginBottom?: Spacing;
  marginTop?: Spacing;
};

export type TypographyProps = MarginProps &
  TypographyInterfaceProps & {
    font?: Font;
    lineHeight?: number;
    letterSpacing?: number;
    size?: number;
  };

export type TypographyInterfaceProps = MarginProps & {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children: React.ReactNode;
  className?: string;
  color?: Color;
  weight?: Weight;
};
const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <Base {...props}>{children}</Base>;
};

export type BaseProps = MarginProps & {
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  color?: Color;
  font?: Font;
  lineHeight?: number;
  letterSpacing?: number;
  size?: number;
  weight?: Weight;
};

const Base = styled.div<BaseProps>`
  ${({
    theme,
    color,
    font,
    lineHeight,
    letterSpacing,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    size,
    weight,
  }) => css`
    color: ${colorMap[color] || theme.text.primary};
    font-family: ${theme.font[font] || theme.font.primary};
    font-size: ${rem(size) || rem(16)};
    font-weight: ${weightMap[weight]};

    ${letterSpacing &&
    css`
      letter-spacing: ${rem(letterSpacing)};
    `}

    ${lineHeight &&
    css`
      line-height: ${rem(lineHeight)};
    `}

      margin: ${margin
      ? theme.spacing[margin]
      : `${theme.spacing[marginTop] || '0'} ${
          theme.spacing[marginRight] || '0'
        } ${theme.spacing[marginBottom] || '0'} ${
          theme.spacing[marginLeft] || '0'
        }`};
  `}
`;

export default Typography;
