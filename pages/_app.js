import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Grommet theme={grommet}>
        <Component {...pageProps} />
      </Grommet>
    </>
  );
}
