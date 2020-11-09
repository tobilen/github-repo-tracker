import React from 'react';
import { Grommet, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { App } from '../src/components/App';

export default function Home() {
  return (
    <Grommet theme={grommet}>
      <Heading>Github Repository Tracker</Heading>
      <App />
    </Grommet>
  );
}
