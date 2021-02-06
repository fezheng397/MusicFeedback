import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import { getButtonSizeStyling, themeMap } from './buttonConfig';
import { ButtonSize, ButtonTheme } from './types';

type ButtonAlign = 'start' | 'center' | 'end';
interface ButtonProps {
  align?: ButtonAlign;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  buttonTheme?: ButtonTheme;

  // Anchor props
  externalLink?: boolean;
  href?: string;
  rel?: string;
  target?: string;
}

const Button = React.forwardRef(
  (
    {
      align = 'center',
      as,
      children,
      className,
      href,
      icon,
      externalLink,
      onClick,
      size = 'md',
      buttonTheme = 'primary',
      ...props
    }: ButtonProps,
    ref
  ) => {
    let Component = as;
    if (!as && href) {
      Component = 'a';
    }

    const ButtonComponent = () => (
      <StyledButton
        align={align}
        as={Component}
        buttonTheme={buttonTheme}
        className={className}
        onClick={onClick}
        size={size}
        ref={ref}
        {...props}
      >
        {icon && (
          <IconContainer buttonTheme={buttonTheme} size={size}>
            {icon}
          </IconContainer>
        )}
        {children}
      </StyledButton>
    );

    if (href) {
      return (
        <Link href={href} passHref={externalLink}>
          {ButtonComponent()}
        </Link>
      );
    }

    return ButtonComponent();
  }
);

type StyledButtonProps = {
  align?: ButtonAlign;
  buttonTheme: ButtonTheme;
  size: ButtonSize;
};

const alignMap: { [key in ButtonAlign]: string } = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, align, buttonTheme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: ${alignMap[align]};
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: ${theme.transition.average};
    box-sizing: border-box;
    ${getButtonSizeStyling(size)}
    ${themeMap[buttonTheme]}

    :focus {
      outline: none;
    }
  `}
`;

const IconContainer = styled.div<StyledButtonProps>`
  display: flex;
  align-items: center;
  height: 100%;
  ${({ size, theme }) =>
    size !== 'icon' &&
    css`
      margin-right: ${theme.spacing.spacing3};
    `}
`;

Button.displayName = 'Button';

export default Button;
