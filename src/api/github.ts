export const getRepositoriesUrl =
  'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc';

export type RepositoryItem = {
  id: number;
  // eslint-disable-next-line camelcase
  node_id: string;
  // eslint-disable-next-line camelcase
  full_name: string;
  // eslint-disable-next-line camelcase
  html_url: string;
  description: string;
  // eslint-disable-next-line camelcase
  stargazers_count: number;
};

export type GetRepositoriesByStarsResponse = {
  // eslint-disable-next-line camelcase
  total_count: number;
  // eslint-disable-next-line camelcase
  incomplete_results: boolean;
  items: RepositoryItem[];
};

export const getRepositoriesByStars = async (): Promise<
  GetRepositoriesByStarsResponse
> => {
  const response = await fetch(getRepositoriesUrl);

  if (!response.ok)
    throw new Error(
      `Could not fetch data from github. Received bad response: ${response.statusText} (${response.status})`,
    );

  try {
    return await response.json();
  } catch (e) {
    throw new Error(`Error parsing github response: ${e}`);
  }
};
