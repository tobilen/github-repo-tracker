import fetchMock from 'fetch-mock-jest';
import '@testing-library/jest-dom/extend-expect';
import { queryCache } from 'react-query';

afterEach(() => {
  fetchMock.resetHistory();
  fetchMock.resetBehavior();
  queryCache.clear();
  localStorage.clear();
});
