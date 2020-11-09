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

  React.useEffect(() => {
    getRepositoriesByStars().then(setRepositories);
  }, []);

  if (repositories) {
    const rows: Row[] = repositories.items.map((item) => ({
      id: item.id,
      name: item.full_name,
      stars: item.stargazers_count,
    }));

    return <RepositoryList caption="Repositories" rows={rows} />;
  }

  return <>Loading...</>;
};
