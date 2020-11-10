import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RepositoryList, Row } from './index';

const exampleRepositories: Row[] = [
  { id: 1, name: 'First Repository', stars: 10, isStarred: true },
  { id: 2, name: 'Another Repository', stars: 378, isStarred: false },
  { id: 3, name: 'Popular Repository', stars: 2000, isStarred: false },
  { id: 4, name: 'Yet another Repository', stars: 5, isStarred: false },
  { id: 5, name: 'Its a Repository', stars: 501, isStarred: false },
];

describe('RepositoryList', () => {
  it('invokes onStar when pressing button to star repository', () => {
    const onStar = jest.fn();

    render(
      <RepositoryList
        rows={exampleRepositories}
        caption=""
        onStar={onStar}
        onUnstar={() => {}}
      />,
    );

    userEvent.click(
      screen.getAllByLabelText('Click to star this repository')[0],
    );
    expect(onStar).toHaveBeenCalledWith(exampleRepositories[1]);
  });
  it('invokes onUnstar when pressing button to un-star repository', () => {
    const onUnstar = jest.fn();

    render(
      <RepositoryList
        rows={exampleRepositories}
        caption=""
        onStar={() => {}}
        onUnstar={onUnstar}
      />,
    );

    userEvent.click(screen.getByLabelText('Click to un-star this repository'));
    expect(onUnstar).toHaveBeenCalledWith(exampleRepositories[0]);
  });
});
