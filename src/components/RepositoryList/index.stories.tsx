import React from 'react';
import { Story } from '@storybook/react';
import { repositories } from '../../mocks/repository';
import { RepositoryList } from './index';

export default {
  title: 'RepositoryTable',
  argTypes: {
    onStar: { action: 'repository starred' },
    onUnstar: { action: 'repository unstarred' },
  },
};

export const Default: Story = (args) => (
  <RepositoryList
    caption="Repository List"
    rows={repositories}
    onStar={args.onStar}
    onUnstar={args.onUnstar}
  />
);
