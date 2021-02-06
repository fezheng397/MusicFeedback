import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header3, Header2, Paragraph2 } from 'components/Typography';
import { Settings } from 'components/Icons';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { SongThumbnail } from './SongThumbnail';

const ArtistDrive = () => {
  return (
    <OuterContainer size='lg'>
      <HeaderWrapper>
        <Header3>Your Music</Header3>
      </HeaderWrapper>
      <ButtonWrapper>
        <Button buttonTheme='secondary' size='lg' icon={<Settings size={24} />}>
          Edit
        </Button>
        <Button buttonTheme='secondary' size='lg' icon={<Settings size={24} />}>
          Edit
        </Button>
      </ButtonWrapper>
      <SongsWrapper>
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
        <SongThumbnail />
      </SongsWrapper>
    </OuterContainer>
  );
};

// const SongsWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(100px, 25%));
//     grid-gap: 4rem;
//     width: 100%
//     justify-content: center;
//     align-content: center;
// `

const SongsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const OuterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

const HeaderWrapper = styled.div`
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
`

export default ArtistDrive;
