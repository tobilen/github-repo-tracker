import fetchMock from 'fetch-mock-jest';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
  fetchMock.mockClear();
});
