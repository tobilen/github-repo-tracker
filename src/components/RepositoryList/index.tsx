import * as React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';
import { Star } from 'grommet-icons';

export type Repository = {
  name: string;
  stars: number;
  id: number;
  isStarred: boolean;
};
export type Props = {
  caption: string;
  rows: Repository[];
  onStar: (row: Repository) => void;
  onUnstar: (row: Repository) => void;
};

export const RepositoryList: React.FC<Props> = ({
  caption,
  rows,
  onStar,
  onUnstar,
}) => (
  <Table caption={caption}>
    <TableHeader>
      <TableRow>
        <TableCell>
          <Text>Name</Text>
        </TableCell>
        <TableCell>
          <Text>Stars</Text>
        </TableCell>
        <TableCell>
          <Text>Starred?</Text>
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.stars}</TableCell>
          <TableCell>
            <Button
              a11yTitle={
                row.isStarred
                  ? 'Click to un-star this repository'
                  : 'Click to star this repository'
              }
              icon={<Star color={row.isStarred ? 'yellow' : 'darkgrey'} />}
              onClick={
                row.isStarred
                  ? () => onUnstar({ ...row, isStarred: false })
                  : () => onStar({ ...row, isStarred: true })
              }
              primary
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
