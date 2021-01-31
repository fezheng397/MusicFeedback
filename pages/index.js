import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AWS from 'aws-sdk';

export default function Home({
  bucket,
  REACT_AWS_S3_ACCESS_KEY_ID,
  REACT_AWS_S3_SECRET_ACCESS_KEY,
}) {
  // All aws s3 client code should be moved to a react context
  AWS.config = new AWS.Config();
  AWS.config.accessKeyId = REACT_AWS_S3_ACCESS_KEY_ID;
  AWS.config.secretAccessKey = REACT_AWS_S3_SECRET_ACCESS_KEY;
  AWS.config.region = 'us-west-1';

  const s3 = new AWS.S3({
    signatureVersion: 'v4',
  });

  const params = {
    Bucket: bucket,
    Key: 'i like me better 105.mp3',
  };
  const url = s3.getSignedUrl('getObject', params);

  function playAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    console.log(audioEl);
    audioEl.play();
  }
  console.log('Url:', url);

  return (
    <div className={styles.container}>
      <button onClick={playAudio}>
        <span>Play Audio</span>
      </button>
      <audio className='audio-element' type='audio/mpeg'>
        <source src={url}></source>
      </audio>
    </div>
  );
}

export async function getStaticProps() {
  const {
    REACT_AWS_S3_ACCESS_KEY_ID,
    REACT_AWS_S3_SECRET_ACCESS_KEY,
    REACT_AWS_S3_AUDIO_BUCKET,
  } = process.env;

  return {
    props: {
      bucket: REACT_AWS_S3_AUDIO_BUCKET,
      REACT_AWS_S3_ACCESS_KEY_ID,
      REACT_AWS_S3_SECRET_ACCESS_KEY,
    },
  };
}
