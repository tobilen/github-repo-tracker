import * as React from 'react';
import { Grommet } from 'grommet';
import { DecoratorFn } from '@storybook/react';

export const GrommetDecorator: DecoratorFn = (storyFn) => (
  <Grommet>{storyFn()}</Grommet>
);
