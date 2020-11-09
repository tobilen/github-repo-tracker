import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';

export type Row = { name: string; stars: number };
export type Props = {
  caption: string;
  rows: Row[];
};

export const RepositoryList: React.FC<Props> = ({ caption, rows }) => (
  <Table caption={caption}>
    <TableHeader>
      <TableRow>
        <TableCell>
          <Text>Name</Text>
        </TableCell>
        <TableCell>
          <Text>Stars</Text>
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.stars}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);