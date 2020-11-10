import React from 'react';
import { Story } from '@storybook/react';
import { RepositoryList, Row } from './index';

export default {
  title: 'RepositoryTable',
};

const exampleRepositories: Row[] = [
  { id: 1, name: 'First Repository', stars: 10, isStarred: true },
  { id: 2, name: 'Another Repository', stars: 378, isStarred: false },
  { id: 3, name: 'Popular Repository', stars: 2000, isStarred: false },
  { id: 4, name: 'Yet another Repository', stars: 5, isStarred: false },
  { id: 5, name: 'Its a Repository', stars: 501, isStarred: false },
];

export const Default: Story = () => (
  <RepositoryList caption="Repository List" rows={exampleRepositories} />
);
