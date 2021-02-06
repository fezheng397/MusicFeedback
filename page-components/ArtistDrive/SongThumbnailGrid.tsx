import React from 'react';
import styled from 'styled-components';
import SongThumbnail from './SongThumbnail';
import { mediaQueryMixin } from 'constants/breakpoints';
import type { Song } from 'types/model';

export type SongThumbnailGridProps = {
    songs: Array<Song>,
}

const SongThumbnailGrid: React.FC<SongThumbnailGridProps> = (props: SongThumbnailGridProps) => {
  return (
    <SongsWrapper>
        {props.songs.map((song) => <SongThumbnail song={song} />)}
    </SongsWrapper>
  );
};

const SongsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    ${mediaQueryMixin('below', 'xl')} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    ${mediaQueryMixin('below', 'md')} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: ${({ theme }) => theme.spacing.layout4};
    }
    ${mediaQueryMixin('below', 'sm')} {
        grid-template-columns: 1fr 1fr;
        grid-gap: ${({ theme }) => theme.spacing.layout2};
    }
    grid-gap: ${({ theme }) => theme.spacing.layout5};
    width: 100%
    justify-content: center;
    align-content: center;
`

export default SongThumbnailGrid;
