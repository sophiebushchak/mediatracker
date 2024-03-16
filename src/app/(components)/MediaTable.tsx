"use client"

import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export function MediaTable({
  media,
}: {
  media: Media[]
}) {
  const rerender = React.useReducer(() => ({}), {})[1];

  const columnHelper = createColumnHelper<Media>();

  const columns = [
    columnHelper.accessor('title', {
      cell: info => info.getValue(),
      header: 'Title',
    }),
    columnHelper.accessor('type', {
      cell: info => info.getValue(),
      header: 'Type'
    }),
    columnHelper.accessor('status', {
      cell: info => info.getValue(),
      header: 'Status'
    }),
  ];

  const table = useReactTable({
    data: media,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
  });

  return (
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>

        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>

        <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.footer,
                    header.getContext(),
                  )}
              </th>
            ))}
          </tr>
        ))}
        </tfoot>
      </table>
  );
}
