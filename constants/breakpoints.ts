import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';

export type MediaQueryType = 'atAndAbove' | 'below';
export type MediaQuerySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export const Breakpoints = {
  // Breakpoints
  xxl: '1360px',
  xl: '1200px',
  lg: '992px',
  md: '768px',
  sm: '460px',
  xs: '360px',
};

export const query = (type: MediaQueryType, size: MediaQuerySize) => {
  const query = type === 'atAndAbove' ? 'min-width' : 'max-width';
  return `(${query}: ${Breakpoints[size]})`;
};

export const mediaQueryMixin = (type: MediaQueryType, size: MediaQuerySize) => {
  return `@media ${query(type, size)}`;
};

export function useMediaQuery(type: MediaQueryType, size: MediaQuerySize) {
  let mediaQueryMixin = window.matchMedia(query(type, size));
  const [match, setMatch] = useState<boolean>(mediaQueryMixin.matches);

  const handleResize = useCallback(
    debounce(
      () => {
        setMatch(mediaQueryMixin.matches);
      },
      100,
      { trailing: true, leading: true, maxWait: 400 }
    ),
    [match]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return match;
}
