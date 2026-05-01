import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import type { DataTableProps } from "../types/table.types";

export function DataTable<T extends object>({
  data,
  columns,
  loading = false,
  pageSize = 10,
  emptyMessage = "No data found"
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const tableColumns = useMemo<ColumnDef<T>[]>(
    () =>
      columns.map((col) => ({
        accessorKey: String(col.key),
        header: col.header,
        enableSorting: col.sortable ?? false,
        cell: ({ row, getValue }) => {
          const value = getValue() as T[keyof T];

          if (col.render) {
            return col.render(value, row.original);
          }

          return String(value ?? "");
        }
      })),
    [columns]
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting
    },
    initialState: {
      pagination: {
        pageSize
      }
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  if (loading) {
    return (
      <div style={{ padding: "16px", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #e5e7eb"
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} style={{ background: "#f9fafb" }}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    padding: "12px",
                    border: "1px solid #e5e7eb",
                    textAlign: "left",
                    cursor: header.column.getCanSort()
                      ? "pointer"
                      : "default"
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {{
                    asc: " ▲",
                    desc: " ▼"
                  }[header.column.getIsSorted() as string] ?? ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{
                  padding: "16px",
                  textAlign: "center",
                  border: "1px solid #e5e7eb"
                }}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      padding: "12px",
                      border: "1px solid #e5e7eb"
                    }}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px"
        }}
      >
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
}