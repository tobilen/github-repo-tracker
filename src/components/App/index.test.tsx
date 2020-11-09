import * as React from 'react';
import fetchMock from 'fetch-mock-jest';
import { render, waitFor } from '@testing-library/react';
import { getRepositoriesUrl } from '../../api/github';
import { getRepositoriesByStarsResponse } from '../../mocks/github';
import { App } from './index';

describe('App', () => {
  it('fetches repositories from github', async () => {
    fetchMock.get(getRepositoriesUrl, getRepositoriesByStarsResponse);

    render(<App />);

    await waitFor(() => {
      expect(fetchMock).toHaveGot(getRepositoriesUrl);
    });
  });
});
