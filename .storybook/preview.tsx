import { GrommetDecorator } from './grommet';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [GrommetDecorator];
