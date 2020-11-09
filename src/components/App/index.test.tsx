import * as React from 'react';
import fetchMock from 'fetch-mock-jest';
import * as ReactQuery from 'react-query';
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
    expect(screen.getByText('First Repository')).toBeInTheDocument();
  });

  it('shows a loading view while fetch is inflight', async () => {
    jest.useFakeTimers();
    fetchMock.get(getRepositoriesUrl, getRepositoriesByStarsResponse, {
      delay: 500,
    });

    render(<App />);
    expect(screen.queryByText('First Repository')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(fetchMock).toHaveGot(getRepositoriesUrl);
    });
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    jest.runAllTimers();
    expect(await screen.findByText('First Repository')).toBeInTheDocument();
  });

  it('shows an error if fetch fails', async () => {
    fetchMock.get(getRepositoriesUrl, 500);
    const onError = jest.fn();
    ReactQuery.setConsole({
      log: () => {},
      warn: () => {},
      error: onError,
    });

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

    expect(onError).toHaveBeenCalledWith(
      new Error(
        'Could not fetch data from github. Received bad response: Internal Server Error (500)',
      ),
    );
  });

  describe('caching', () => {
    it('uses cache on subsequent renders', async () => {
      fetchMock.get(getRepositoriesUrl, getRepositoriesByStarsResponse);

      render(<App />);

      await waitFor(() => {
        expect(fetchMock).toHaveGot(getRepositoriesUrl);
      });

      render(<App />);

      expect(fetchMock).toHaveFetchedTimes(1);

      expect(screen.getAllByText('First Repository')).toHaveLength(2);
    });
  });
});
