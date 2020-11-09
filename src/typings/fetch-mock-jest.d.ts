declare module 'fetch-mock-jest' {
  import { FetchMockStatic, MockCall } from 'fetch-mock';

  export type FetchMockJest = jest.MockInstance<Response, MockCall> &
    FetchMockStatic & { resetHistory: () => void; resetBehavior: () => void };

  const fetchMockJest: FetchMockJest;

  export default fetchMockJest;
}
