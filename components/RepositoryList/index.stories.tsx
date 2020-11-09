import React from 'react';
import { Story } from '@storybook/react';
import { RepositoryList, Row } from './index';

export default {
  title: 'RepositoryTable',
};

const exampleRepositories: Row[] = [
  { name: 'First Repository', stars: 10 },
  { name: 'Another Repository', stars: 378 },
  { name: 'Popular Repository', stars: 2000 },
  { name: 'Yet another Repository', stars: 5 },
  { name: 'Its a Repository', stars: 501 },
];

export const Default: Story = () => (
  <RepositoryList caption="Repository List" rows={exampleRepositories} />
);
