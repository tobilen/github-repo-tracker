import * as React from 'react';
import fetchMock from 'fetch-mock-jest';
import { render, waitFor, screen } from '@testing-library/react';
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

  it('shows a loading view while fetch is inflight', async () => {
    fetchMock.get(getRepositoriesUrl, getRepositoriesByStarsResponse, {
      delay: 500,
    });

    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchMock).toHaveGot(getRepositoriesUrl);
    });
  });
});
