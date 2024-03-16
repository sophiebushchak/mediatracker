"use client"

import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { UserMediaStatus } from '@/data/definitions';

export function MediaTable({
  media,
}: {
  media: UserMediaStatus[]
}) {
  const columnHelper = createColumnHelper<UserMediaStatus>();

  const columns = [
    columnHelper.accessor(userMedia => userMedia.media.title, {
      id: 'title',
      cell: info => info.getValue(),
      header: 'Title',
    }),
    columnHelper.accessor(userMedia => userMedia.media.type, {
      cell: info => info.getValue(),
      header: 'Type',
      enableSorting: false,
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
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
  });

  return (
      <table className="w-full">
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : (
                    <div
                      className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
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
      </table>
  );
}
