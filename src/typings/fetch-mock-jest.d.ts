declare module 'fetch-mock-jest' {
  import { FetchMockStatic, MockCall } from 'fetch-mock';

  export type FetchMockJest = jest.MockInstance<Response, MockCall> &
    FetchMockStatic;

  const fetchMockJest: FetchMockJest;

  export default fetchMockJest;
}
