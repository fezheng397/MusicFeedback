import React from 'react';
import {
  useMediaQuery,
  MediaQuerySize,
  MediaQueryType,
} from 'constants/breakpoints';

interface MediaQueryProps {
  children: React.ReactNode;
  query: MediaQueryType;
  size: MediaQuerySize;
}

const MediaQuery: React.FC<MediaQueryProps> = ({ children, query, size }) => {
  const match = useMediaQuery(query, size);

  return <React.Fragment>{match && children}</React.Fragment>;
};

export default MediaQuery;
