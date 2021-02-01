import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useS3 } from 's3/context/S3Context';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

export default function Home({}) {
  const { getAudioFile, s3 } = useS3();
  // i like me better 105.mp3
  const audioFile = getAudioFile('Madeon - Pay No Mind Original_Mix.mp3');
  const [audioUrl, setAudioUrl] = useState('');
  const [wavesurfer, setWavesurfer] = useState(undefined);

  useEffect(() => {
    async function initAudio() {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      const CursorPlugin = (
        await import('wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js')
      ).default;

      setAudioUrl(audioFile);
      const xhr = {
        cache: 'default',
        mode: 'cors',
        method: 'GET',
        credentials: 'same-origin',
      };
      const wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#C2BFE6',
        progressColor: '#4353FF',
        cursorColor: '#4353FF',
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
        scrollParent: false,
        height: 200,
        barGap: 3,
        plugins: [
          CursorPlugin.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
              'background-color': '#000',
              color: '#fff',
              padding: '2px',
              'font-size': '10px',
            },
          }),
          RegionsPlugin.create({
            regionsMinLength: 2,
            dragSelection: {
              slop: 5,
            },
          }),
        ],
        xhr,
      });
      setWavesurfer(wavesurfer);
      setTimeout(() => {
        wavesurfer.load(
          audioFile ||
            'https://music-feedback-audio-files.s3.us-east-2.amazonaws.com/Madeon%20-%20Pay%20No%20Mind%20Original_Mix.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASZGDUSH72H3ARGGR%2F20210131%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210131T174311Z&X-Amz-Expires=900&X-Amz-Signature=9b79402d42f449d8618bd81c19eff933de853148c8e65529f0aa3b33ce8c32db&X-Amz-SignedHeaders=host'
        );
      }, 500);
    }

    initAudio();
  }, [getAudioFile, s3]);

  const playAudio = useCallback(() => {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    console.log(audioEl);
    audioEl.play();
    wavesurfer.play();
  }, [wavesurfer]);
  console.log('Url:', audioUrl);

  return (
    <div className={styles.container}>
      <button onClick={playAudio}>
        <span>Play Audio</span>
      </button>
      <div
        id='waveform'
        style={{
          width: '100%',
          height: '100%',
          marginTop: '200px',
          position: 'relative',
        }}
      ></div>
    </div>
  );
}
