import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header2, Paragraph2 } from 'components/Typography';
import { Settings } from 'components/Icons';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { SongThumbnail } from './SongThumbnail';

const ArtistDrive = () => {
  return (
    <Container size='lg'>
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
    </Container>
  );
};

const SongsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 25%));
    grid-gap: 4rem;
    justify-content: center;
    align-content: center;
`

export default ArtistDrive;
