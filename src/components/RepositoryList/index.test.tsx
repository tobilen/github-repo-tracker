import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { repositories } from '../../mocks/repository';
import { RepositoryList } from './index';

describe('RepositoryList', () => {
  it('invokes onStar when pressing button to star repository', () => {
    const onStar = jest.fn();

    render(
      <RepositoryList
        rows={repositories}
        caption=""
        onStar={onStar}
        onUnstar={() => {}}
      />,
    );

    userEvent.click(
      screen.getAllByLabelText('Click to star this repository')[0],
    );
    expect(onStar).toHaveBeenCalledWith({
      ...repositories[1],
      isStarred: true,
    });
  });

  it('invokes onUnstar when pressing button to un-star repository', () => {
    const onUnstar = jest.fn();

    render(
      <RepositoryList
        rows={repositories}
        caption=""
        onStar={() => {}}
        onUnstar={onUnstar}
      />,
    );

    userEvent.click(screen.getByLabelText('Click to un-star this repository'));
    expect(onUnstar).toHaveBeenCalledWith({
      ...repositories[0],
      isStarred: false,
    });
  });
});
