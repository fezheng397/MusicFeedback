import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useS3 } from 's3/context/S3Context';

export default function Home({}) {
  const { getAudioFile, s3 } = useS3();
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    setAudioUrl(getAudioFile('i like me better 105.mp3'));
  }, [getAudioFile, s3]);

  function playAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    console.log(audioEl);
    audioEl.play();
  }
  console.log('Url:', audioUrl);

  return (
    <div className={styles.container}>
      <button onClick={playAudio}>
        <span>Play Audio</span>
      </button>
      <audio className='audio-element' type='audio/mpeg'>
        <source src={audioUrl}></source>
      </audio>
    </div>
  );
}
