import * as React from 'react';
import { QueryStatus, useQuery } from 'react-query';
import {
  getRepositoriesByStars,
  GetRepositoriesByStarsResponse,
  getRepositoriesUrl,
} from '../../api/github';
import { RepositoryList, Row } from '../RepositoryList';

export const App: React.FC = () => {
  const { data, refetch, status, error } = useQuery<
    GetRepositoriesByStarsResponse
  >(getRepositoriesUrl, getRepositoriesByStars, {
    retry: 0,
    staleTime: 0,
  });

  if (status === QueryStatus.Error)
    return (
      <>An Error occurred while fetching data: {(error as Error).message}</>
    );

  if (status === QueryStatus.Success && data) {
    const rows: Row[] = data.items.map((item) => ({
      id: item.id,
      name: item.full_name,
      stars: item.stargazers_count,
    }));

    return (
      <>
        <RepositoryList caption="Repositories" rows={rows} />
        <button type="button" onClick={() => refetch()}>
          Reload data
        </button>
      </>
    );
  }

  return <>Loading...</>;
};
