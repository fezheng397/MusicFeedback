import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useS3 } from 's3/context/S3Context';
import { Waveform } from 'components/Waveform';
import { Header1 } from 'components/Typography';
import { Button } from 'components/Button';
import { Play } from 'components/Icons';
import { Container } from 'components/Container';

export default function Home({}) {
  const { getAudioFile } = useS3();
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    // i like me better 105.mp3
    const audioFile = getAudioFile('Madeon - Pay No Mind Original_Mix.mp3');
    setAudioUrl(audioFile);
  }, []);

  return (
    <Container size='lg'>
      <Header1>Hello header</Header1>
      <Button size='lg'>Button text</Button>
      <Play size={24} />
      <Waveform audioUrl={audioUrl} />
    </Container>
  );
}
