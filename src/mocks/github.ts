import { GetRepositoriesByStarsResponse } from '../api/github';

export const getRepositoriesByStarsResponse: GetRepositoriesByStarsResponse = {
  total_count: 5,
  incomplete_results: true,
  items: [
    {
      full_name: 'First Repository',
      description: 'A first repository',
      html_url: 'https://github.com/first-repository',
      id: 1,
      node_id: '1',
      stargazers_count: 10,
    },
    {
      full_name: 'Another Repository',
      description: 'Some other repository',
      html_url: 'https://github.com/another-repository',
      id: 2,
      node_id: '2',
      stargazers_count: 378,
    },
    {
      full_name: 'Popular Repository',
      description: 'This is a fairly popular repository',
      html_url: 'https://github.com/popular-repository',
      id: 3,
      node_id: '3',
      stargazers_count: 2000,
    },
    {
      full_name: 'Yet another Repository',
      description: 'Yet another repository',
      html_url: 'https://github.com/yet-another-repository',
      id: 4,
      node_id: '4',
      stargazers_count: 5,
    },
    {
      full_name: 'Its a Repository',
      description: 'You will never guess it, but this is a repository',
      html_url: 'https://github.com/its-a-repository',
      id: 5,
      node_id: '5',
      stargazers_count: 501,
    },
  ],
};
