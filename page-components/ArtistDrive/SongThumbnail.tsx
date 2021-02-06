import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { Label3, Label4 } from 'components/Typography';
import { Button } from 'components/Button';
import type { SongThumbnailProps } from './types';
import { formatSongLength } from 'utilities/timeUtils';


const SongThumbnail: React.FC<SongThumbnailProps> = (props: SongThumbnailProps) => {

  return (
    <SongThumbnailWrapper
      buttonTheme="unstyled"
      size="link"
    >
      <SongImageBackground />
      <Label3 marginTop="spacing5" weight="semibold">{props.song?.name || ''}</Label3> {/* TODO: HANDLE OVERFLOW*/}
      <SongTwoSideInfoWrapper>
        <Label4 weight="normal">{props.song?.num_reviews || 'No'} Reviews</Label4>
        <Label4 weight="normal">{formatSongLength(props.song?.length || 0)}</Label4>
      </SongTwoSideInfoWrapper>
      <Label4 marginTop="spacing2" color="tertiary" weight="normal">Uploaded on 12/23</Label4> {/* TODO: ADD HELPER AND GET DATE*/}
    </SongThumbnailWrapper>
  );
};

const SongThumbnailWrapper = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const SongImageBackground = styled.div`
  background: ${({ theme }) => theme.color.brand.light08};
  border-radius: ${rem(12)};
  height: ${rem(200)};
  width: 100%;
`;

const SongTwoSideInfoWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default SongThumbnail;

