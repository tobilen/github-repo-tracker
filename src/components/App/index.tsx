import * as React from 'react';
import {
  getRepositoriesByStars,
  GetRepositoriesByStarsResponse,
} from '../../api/github';
import { RepositoryList, Row } from '../RepositoryList';

export const App: React.FC = () => {
  const [repositories, setRepositories] = React.useState<
    GetRepositoriesByStarsResponse
  >();
  const [status, setStatus] = React.useState<'loading' | 'error' | 'success'>(
    'loading',
  );
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    getRepositoriesByStars()
      .then((data) => {
        setRepositories(data);
        setStatus('success');
      })
      .catch((e) => {
        setStatus('error');
        setError(e);
      });
  }, []);

  if (status === 'error')
    return <>An Error occurred while fetching data: {error?.message}</>;

  if (status === 'success' && repositories) {
    const rows: Row[] = repositories.items.map((item) => ({
      id: item.id,
      name: item.full_name,
      stars: item.stargazers_count,
    }));

    return <RepositoryList caption="Repositories" rows={rows} />;
  }

  return <>Loading...</>;
};
