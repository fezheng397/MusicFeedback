import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header3, Header2, Paragraph2 } from 'components/Typography';
import { Section } from 'components/Layout';
import { Settings } from 'components/Icons';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import SongThumbnailGrid from './SongThumbnailGrid';
import { mockSongList } from './mocks';

const ArtistDrive = () => {
  return (
    <OuterContainer size="lg">
      <Section>
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
      </Section>
      <SongThumbnailGrid songs={mockSongList}/>
    </OuterContainer>
  );
};

const SongsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
    width: 100%
    justify-content: center;
    align-content: center;
`

// const SongsWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
// `

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
`

export default ArtistDrive;
