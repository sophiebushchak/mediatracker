import { ReactNode } from 'react';

export function MediaTable({
  media,
}: {
  media: Media[]
}) {
  const mediaSorted = media.sort((a, b) => {
    if (a.type > b.type) {
      return 1;
    } else if (a.type === b.type) {
      return 0;
    }
    return -1;
  });

  const tableRows = (): ReactNode => {
    return mediaSorted.map(media => (
      <TableRow key={media.title}>
        <td>{media.title}</td>
        <td>{media.status}</td>
        <td>{media.type}</td>
      </TableRow>
    ));
  };

  return (
    <table>
      <thead>
      <TableRow>
        <TableHeading scope='col'>Title</TableHeading>
        <th scope='col'>Type</th>
        <th scope='col'>Status</th>
      </TableRow>
      </thead>
      <tbody>
      {tableRows()}
      </tbody>
    </table>
  );
}

function TableRow({ children }: { children: ReactNode}) {
  return (
    <tr className='py-2 border-b-2'>
      {children}
    </tr>
  )
}

function TableHeading(props: { scope: string, children: React.ReactNode }) {
  return (
    <th>
      {props.children}
    </th>
  );
}