import { css } from 'styled-components';
import { rem } from 'polished';

export const defaultFocusStyle = css`0 0 0 ${rem(2)} ${({ theme }) =>
  theme.focus.brand};
`;

export const keyboardFocus = (first: any, ...args: any) => css`
  transition: ${({ theme }) => theme.transition.average};

  :focus {
    outline: none;
  }

  body.keyboard-focus & {
    :focus {
      box-shadow: ${defaultFocusStyle};
      ${css(first, ...args)}
    }
  }
`;
