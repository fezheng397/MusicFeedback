import React from 'react';
import styled, { css } from 'styled-components';
import { Header3 } from 'components/Typography';
import { Close } from 'components/Icons';
import { Button } from 'components/Button';

type HeaderProps = {
  onClose?: () => void;
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ onClose, title }) => {
  return (
    <HeaderWrapper hasTitle={!!title}>
      <Header3>{title}</Header3>
      <CloseButton buttonTheme='unstyled' onClick={onClose} size='icon'>
        <Close size={24} />
      </CloseButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ hasTitle: boolean }>`
  position: relative;
  padding: ${({ hasTitle, theme }) => hasTitle && theme.spacing.layout2};
`;

const CloseButton = styled(Button)`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacing.layout1};
    right: ${theme.spacing.layout1};
    color: ${theme.color.opacity.black80};
    border-radius: 50%;
    padding: ${theme.spacing.spacing3};

    :hover {
      background: ${theme.background.secondary};
    }
  `}
`;

export default Header;
