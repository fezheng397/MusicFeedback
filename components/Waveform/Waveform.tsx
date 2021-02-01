import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  audioUrl?: string;
};

const Waveform: React.FC<Props> = ({ audioUrl }) => {
  const [wavesurfer, setWavesurfer] = useState(undefined);

  useEffect(() => {
    async function initAudio() {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      const CursorPlugin = (
        await import('wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js')
      ).default;

      const xhr = {
        cache: 'default',
        mode: 'cors',
        method: 'GET',
        credentials: 'same-origin',
      };

      const wavesurferInstance = WaveSurfer.create({
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
        ],
        xhr,
      });

      setWavesurfer(wavesurferInstance);
    }

    initAudio();
  }, []);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(audioUrl);
    }
  }, [wavesurfer]);

  const playAudio = useCallback(() => {
    wavesurfer.play();
  }, [wavesurfer]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        marginTop: '200px',
        position: 'relative',
      }}
    >
      <button onClick={playAudio}>
        <span>Play Audio</span>
      </button>
      <div id='waveform'></div>
    </div>
  );
};

export default Waveform;
