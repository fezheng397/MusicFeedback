import React from 'react';
import styled, { css } from 'styled-components';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerProps = {
  color?: string;
  size?: SpinnerSize;
};

const Spinner = React.forwardRef(
  ({ color, size = 'lg' }: SpinnerProps, ref: React.Ref<HTMLDivElement>) => {
    return <StyledSpinner color={color} ref={ref} size={size} />;
  }
);

Spinner.displayName = 'Spinner';

const spinnerSizes: { [key in SpinnerSize]: string } = {
  sm: '16px',
  md: '24px',
  lg: '32px',
};

const spinnerBorderWidth = {
  lg: '4px',
  sm: '3px',
};

export const StyledSpinner = styled.div<SpinnerProps>`
  ${({ color, size, theme }) => css`
    display: inline-block;
    width: ${spinnerSizes[size]};
    height: ${spinnerSizes[size]};

    vertical-align: text-bottom;
    color: ${color ? color : theme.text.primary};
    border: ${size === 'sm' ? spinnerBorderWidth.sm : spinnerBorderWidth.lg}
      solid;
    border-right: ${size === 'sm'
        ? spinnerBorderWidth.sm
        : spinnerBorderWidth.lg}
      solid transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;

    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `}
`;

export default Spinner;
