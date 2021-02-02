import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Button, IconButton } from 'components/Button';
import { Pause, Play } from 'components/Icons';

type PlayButtonProps = {
  isPlaying?: boolean;
  noBorder?: boolean;
  onClick?: () => void;
  size?: number;
};

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  noBorder,
  onClick,
  size = 28,
}) => {
  return (
    <PlayButtonWrapper
      as={noBorder ? IconButton : Button}
      noBorder={noBorder}
      size='icon'
      buttonTheme='unstyled'
      onClick={onClick}
    >
      {isPlaying ? <Pause size={size} /> : <Play size={size} />}
    </PlayButtonWrapper>
  );
};

const PlayButtonWrapper = styled(Button)<{ noBorder?: boolean }>`
  ${({ noBorder, theme }) =>
    !noBorder &&
    css`
      padding: ${rem(4)};
      border: 2px solid ${theme.text.primary};
    `}
`;

export default PlayButton;
