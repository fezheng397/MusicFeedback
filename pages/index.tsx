import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useS3 } from 's3/context/S3Context';
import { Waveform } from 'components/Waveform';

export default function Home({}) {
  const { getAudioFile, s3 } = useS3();
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    // i like me better 105.mp3
    const audioFile = getAudioFile('Madeon - Pay No Mind Original_Mix.mp3');
    setAudioUrl(audioFile);
  }, []);

  return (
    <div>
      <Waveform audioUrl={audioUrl} />
    </div>
  );
}
