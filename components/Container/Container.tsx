import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { mediaQueryMixin } from 'constants/breakpoints';

type Size = 'lg' | 'md' | 'sm' | 'fluid';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  size?: Size;
};

const sizeMap: { [key in Size]: number } = {
  sm: 800,
  md: 1000,
  lg: 1200,
  fluid: 100,
};

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = 'md',
}) => {
  return (
    <ContainerWrapper className={className} size={size}>
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div<{ size: Size }>`
  ${({ size }) => css`
    ${size === 'fluid' && 'width: 100%;'}
    ${size !== 'fluid' && `max-width: ${rem(sizeMap[size])};`}
    margin: 0 auto;
    padding: 0 ${rem(40)};

    ${mediaQueryMixin('below', 'md')} {
      padding: 0 ${rem(20)};
    }
  `}
`;

export default Container;
