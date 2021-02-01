import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './Button';

type Direction = 'vertical' | 'horizontal';

type ButtonGroupProps = {
  children?: React.ReactNode;
  direction?: Direction;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  direction = 'horizontal',
}) => {
  return direction === 'horizontal' ? (
    <HorizontalButtonGroup>{children}</HorizontalButtonGroup>
  ) : (
    <VerticalButtonGroup>{children}</VerticalButtonGroup>
  );
};

const HorizontalButtonGroup = styled.div`
  display: flex;
  align-items: center;

  ${StyledButton} + ${StyledButton} {
    margin-left: ${({ theme }) => theme.spacing.layout1};
  }
`;

const VerticalButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${StyledButton} + ${StyledButton} {
    margin-top: ${({ theme }) => theme.spacing.layout1};
  }
`;

export default ButtonGroup;
