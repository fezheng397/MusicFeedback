import { theme } from 'constants/theme';
import { rem } from 'polished';
import { Styles } from 'react-modal';

/*
  modalStyles are defined as a JS object because it gets passed in as inline
  styles to the react-modal component. Takes an optional maxWidth argument for
  desktop sizing.
*/
export const modalStyles = (maxWidth: string, fullscreen: boolean): Styles => {
  return {
    // dark background behind all modals
    overlay: {
      background: fullscreen ? 'transparent' : theme.color.opacity.black64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'visible',
      overflowX: 'hidden',
      zIndex: 9998,
      padding: fullscreen ? '0' : theme.spacing.layout2,
    },
    // modal root
    content: {
      position: 'relative',
      background: theme.background.primary,
      backgroundClip: 'padding-box',
      borderRadius: fullscreen ? '0' : theme.spacing.spacing4,
      border: '0',
      padding: '0',
      zIndex: 9999,
      width: '100%',
      maxWidth: maxWidth,
      maxHeight: fullscreen ? '100%' : `calc(100vh - ${theme.spacing.layout7})`,
      overflowY: 'hidden',
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      right: 'auto',
      boxShadow: theme.shadow.small.down,
      fontFamily: theme.font.secondary,
      height: fullscreen ? '100vh' : 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
  };
};
