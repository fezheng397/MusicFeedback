import { css, createGlobalStyle } from 'styled-components';
import { keyboardFocus } from 'utilities/keyboardFocus';

const ResetStyles = createGlobalStyle`
${({ theme }) => css`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.background.primary};
    font-family: ${theme.font.primary};
  }

  div,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  ul {
    line-height: 1;
    font-style: normal;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button,
  a {
    ${keyboardFocus}
  }

  input {
    :focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  }

  a {
    text-decoration: none;
    color: ${theme.text.active};
  }
`}

`;

export default ResetStyles;
