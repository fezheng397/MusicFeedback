import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header2, Paragraph2 } from 'components/Typography';
import { Settings } from 'components/Icons';
import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { useS3 } from 's3/context/S3Context';
import { Waveform } from 'components/Waveform';

const SongSection = () => {
  const { getAudioFile } = useS3();
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    // i like me better 105.mp3
    const audioFile = getAudioFile('Madeon - Pay No Mind Original_Mix.mp3');
    setAudioUrl(audioFile);
  }, []);

  return (
    <Container size="lg">
      <SongTitleSection>
        <Header2 marginRight="layout5">Song name</Header2>
        <Button buttonTheme="secondary" size="lg" icon={<Settings size={24} />}>
          Edit
        </Button>
      </SongTitleSection>
      <Paragraph2 marginBottom="layout5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet pharetra justo at
        scelerisque. Nunc auctor elit tincidunt, rhoncus dui eget, aliquet nibh. Nulla neque est,
        pulvinar ut leo vitae, malesuada tincidunt nulla. Sed in quam a purus lacinia luctus.
        Phasellus non rutrum eros. Aenean mi ipsum, efficitur et semper non, accumsan quis leo.
        Etiam ut est eu diam consequat sodales. Cras lobortis consequat sem non varius.
      </Paragraph2>
      <Waveform audioUrl={audioUrl} />
    </Container>
  );
};

const SongTitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.layout4};
`;

export default SongSection;
