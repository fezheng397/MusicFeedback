import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { setupS3Credentials } from 's3/setupS3Credentials';
import AWS from 'aws-sdk';

const S3Context = createContext(undefined);
S3Context.displayName = 'S3Context';

type Props = {
  children?: React.ReactNode;
};

export const S3ContextProvider = ({ children }: Props) => {
  setupS3Credentials();
  let s3 = new AWS.S3({
    signatureVersion: 'v4',
  });

  const getAudioFile = (key) => {
    if (!s3) {
      return '';
    }

    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_AUDIO_BUCKET,
      Key: key,
    };

    const url = s3.getSignedUrl('getObject', params);
    return url;
  };

  const value = useMemo(() => {
    return { s3, getAudioFile };
  }, [s3, getAudioFile]);
  console.log(value);

  return <S3Context.Provider value={value}>{children}</S3Context.Provider>;
};

export const useS3 = () => {
  const context = useContext(S3Context);
  if (!context) {
    throw new Error('S3Context not initialized with a value');
  }

  return context;
};
