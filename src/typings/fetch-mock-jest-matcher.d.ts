import type { InspectionFilter, InspectionOptions } from 'fetch-mock';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveFetched(filter?: InspectionFilter, options?: InspectionOptions): R;
      toHaveGot(filter?: InspectionFilter, options?: InspectionOptions): R;
      toHavePosted(filter?: InspectionFilter, options?: InspectionOptions): R;
      toHaveLastFetched(
        filter?: InspectionFilter,
        options?: InspectionOptions,
      ): R;
      toHaveNthFetched(
        n: number,
        filter?: InspectionFilter,
        options?: InspectionOptions,
      ): R;
      toHaveFetchedTimes(
        times: number,
        filter?: InspectionFilter,
        options?: InspectionOptions,
      ): R;
      toBeDone(filter?: InspectionFilter): R;
    }
  }
}
