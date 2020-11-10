import * as React from 'react';
import { QueryStatus, useQuery } from 'react-query';
import { Button, Text } from 'grommet';
import {
  getRepositoriesByStars,
  GetRepositoriesByStarsResponse,
  getRepositoriesUrl,
} from '../../api/github';
import { RepositoryList, Row } from '../RepositoryList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const App: React.FC = () => {
  const { data, refetch, status, error, isFetching } = useQuery<
    GetRepositoriesByStarsResponse
  >(getRepositoriesUrl, getRepositoriesByStars, {
    retry: 0,
    staleTime: 10 * 60 * 1000,
  });

  const [starredRepositories, setStarredRepositories] = useLocalStorage<Row[]>(
    'github-repo-tracker.starred',
    [],
  );

  const rows: Row[] = React.useMemo(
    () =>
      data
        ? data.items.map((item) => ({
            id: item.id,
            name: item.full_name,
            stars: item.stargazers_count,
            isStarred: starredRepositories.some(
              (starredRepository) => starredRepository.id === item.id,
            ),
          }))
        : [],
    [data, starredRepositories],
  );

  if (isFetching)
    return (
      <>
        <Button
          type="button"
          onClick={() => refetch()}
          label="Reload data"
          disabled
        />
        <br />
        <Text>Loading...</Text>
      </>
    );

  if (status === QueryStatus.Error)
    return (
      <>An Error occurred while fetching data: {(error as Error).message}</>
    );

  if (status === QueryStatus.Success && data) {
    return (
      <>
        <Button type="button" onClick={() => refetch()} label="Reload data" />
        <RepositoryList
          caption="Repositories"
          rows={rows}
          onStar={(repository) => {
            setStarredRepositories(
              [...starredRepositories, repository].filter(
                (value, index, self) => self.indexOf(value) === index,
              ),
            );
          }}
          onUnstar={() => {}}
        />
      </>
    );
  }

  return <Text>Loading...</Text>;
};
