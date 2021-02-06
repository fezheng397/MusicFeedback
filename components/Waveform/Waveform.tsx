import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayButton } from 'components/Player';
import { theme } from 'constants/theme';

type Props = {
  audioUrl?: string;
  height?: number;
};

const Waveform: React.FC<Props> = ({ audioUrl, height = 120 }) => {
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

      if (!wavesurfer) {
        const wavesurferInstance = WaveSurfer.create({
          container: document.querySelector('#waveform'),
          waveColor: theme.color.brand.light24,
          progressColor: theme.color.brand.base,
          cursorColor: theme.color.brand.base,
          barWidth: 3,
          barRadius: 3,
          cursorWidth: 1,
          scrollParent: false,
          height,
          barGap: 3,
          plugins: [
            CursorPlugin.create({
              showTime: true,
              opacity: 1,
              customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '14px',
              },
            }),
          ],
          xhr,
        });
        setWavesurfer(wavesurferInstance);
      }
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
    <div>
      <WaveformContainer>
        <div id='waveform'></div>
      </WaveformContainer>
      <ControlBar>
        <PlayButton onClick={playAudio} isPlaying={false} size={48} />
      </ControlBar>
    </div>
  );
};

const WaveformContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.layout4} 0;
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.layout4} 0;
`;

export default Waveform;
