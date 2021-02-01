import React from 'react';
import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { Size, Color, StyledSvgProps } from './types';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
  rotate?: number;
  children?: React.ReactNode;
  /** Used as svg width/height. */
  size?: Size;
  /** Used as svg fill */
  color?: Color;
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?(): void;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = (props) => {
  const { children, className, title } = props;

  return (
    <Svg data-constellate='icon' className={className} {...props}>
      {title ? <title>{title}</title> : null}
      {children}
    </Svg>
  );
};

const Svg = styled.svg<StyledSvgProps>`
  ${({ color, size, rotate }) => css`
    display: inline-block;
    fill: ${color || 'currentColor'};
    width: ${typeof size === 'number' ? rem(size) : size};
    ${rotate && `transform: rotate(${rotate}deg);`}
  `}
`;

export default Icon;
