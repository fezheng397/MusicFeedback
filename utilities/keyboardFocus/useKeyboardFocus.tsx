import { useEffect } from 'react';

export function useKeyboardFocus() {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-focus');
    }
  }

  function handleMouseEvent(event: MouseEvent) {
    document.body.classList.remove('keyboard-focus');
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseEvent);
    };
  }, []);
}
