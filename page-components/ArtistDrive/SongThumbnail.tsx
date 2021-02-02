import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { Header6, Paragraph2, Paragraph4 } from 'components/Typography';
import { Settings } from 'components/Icons';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import type { SongThumbnailProps } from './types';
import { mediaQueryMixin } from 'constants/breakpoints';


export const SongThumbnail: React.FC<SongThumbnailProps> = (props: SongThumbnailProps) => {

  return (
    <SongThumbnailWrapper
      buttonTheme="unstyled"
      size="link"
    >
      <SongImage
        src={'https://joshuaspodek.com/wp-content/uploads/2019/05/music-notes.png'}
      />
      <SongInfoWrapper>
        <Header6>Here We Go Again</Header6>
      </SongInfoWrapper>
      <SongTwoSideInfoWrapper>
        <Paragraph4>3 Reviews</Paragraph4>
        <Paragraph4>3:47</Paragraph4>
      </SongTwoSideInfoWrapper>
      <SongInfoWrapper>
        <Paragraph4>Uploaded on 12/23</Paragraph4>
      </SongInfoWrapper>
    </SongThumbnailWrapper>
  );
};

const SongThumbnailWrapper = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadow.medium.down};
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SongImage = styled.img`
  align-self: center;
  height: ${rem(180)};
  width: ${rem(180)};
`;

const SongInfoWrapper = styled.div`
  margin-top: 10px;
`;

const SongTwoSideInfoWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

