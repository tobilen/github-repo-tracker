import * as React from 'react';
import fetchMock from 'fetch-mock-jest';
import { render, waitFor, screen, act } from '@testing-library/react';
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

  it('shows an error if fetch fails', async () => {
    fetchMock.get(getRepositoriesUrl, 500);

    render(<App />);
    await act(async () => {
      await waitFor(() => {
        expect(fetchMock).toHaveGot(getRepositoriesUrl);
      });
    });

    expect(
      screen.getByText(
        'An Error occurred while fetching data: Could not fetch data from github. Received bad response: Internal Server Error (500)',
      ),
    ).toBeInTheDocument();
  });
});
