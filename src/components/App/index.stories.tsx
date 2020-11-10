import React from 'react';
import { Story } from '@storybook/react';
import fetchMock from 'fetch-mock';
import { getRepositoriesByStarsResponse } from '../../mocks/github';
import { App } from './index';

export default {
  title: 'App',
};

export const Default: Story = () => {
  fetchMock
    .restore()
    .get(
      'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc',
      getRepositoriesByStarsResponse,
    );
  return <App />;
};
