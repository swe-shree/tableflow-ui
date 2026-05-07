import clsx from "clsx";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import type {
  SortDirection,
  TableContainerProps,
} from "../types/table.types";

export default function TableContainer<TData extends object>({
  columns,
  values,
  isLoading = false,
  emptyMessage = "No data found",

  selectedRows = [],
  onSelectionChange,

  page = 1,
  limit = 10,
  total = values.length,
  onPageChange,

  enableSearch = false,
  searchValue = "",
  onSearchChange,

  enableSorting = false,
  sortBy,
  sortDirection,
  onSortChange,

  enableFiltering = false,
  filters = {},
  onFilterChange,
}: TableContainerProps<TData>) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const canPreviousPage = page > 1;
  const canNextPage = page < totalPages;

  const colSpan = columns.length + 1;

  function isRowSelected(row: TData) {
    return selectedRows.includes(row);
  }

  function toggleRow(row: TData) {
    if (!onSelectionChange) return;

    if (isRowSelected(row)) {
      onSelectionChange(selectedRows.filter((item) => item !== row));
    } else {
      onSelectionChange([...selectedRows, row]);
    }
  }

  function toggleAllRows() {
    if (!onSelectionChange) return;

    if (selectedRows.length === values.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(values);
    }
  }

  function handleSort(key: keyof TData) {
    if (!enableSorting || !onSortChange) return;

    let nextDirection: SortDirection = "asc";

    if (sortBy === key && sortDirection === "asc") {
      nextDirection = "desc";
    }

    onSortChange(key, nextDirection);
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
      {enableSearch && (
        <div className="border-b p-4">
          <input
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="bg-white">
              <th className="w-12 px-4 py-3.5 text-left">
                <input
                  type="checkbox"
                  checked={values.length > 0 && selectedRows.length === values.length}
                  onChange={toggleAllRows}
                />
              </th>

              {columns.map((column) => {
                const isSorted = sortBy === column.key;
                const canSort = enableSorting && column.sortable !== false;

                return (
                  <th
                    key={String(column.key)}
                    onClick={() => canSort && handleSort(column.key)}
                    className={clsx(
                      "px-[10px] py-[10px]align-middle text-left font-Inter text-[12px] leading-[16px] text-slate-500-[13.48px] tracking-[0.51px] uppercase text-[6B7280]",
                      canSort && "cursor-pointer select-none hover:bg-slate-100",
                      column.headerClassName
                    )}
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      {column.label}

                      {canSort &&
                        (isSorted && sortDirection === "asc" ? (
                          <FaSortUp />
                        ) : isSorted && sortDirection === "desc" ? (
                          <FaSortDown />
                        ) : (
                          <FaSort />
                        ))}
                    </div>
                  </th>
                );
              })}
            </tr>

            {enableFiltering && (
              <tr className="bg-slate-50">
                <th />

                {columns.map((column) => (
                  <th key={String(column.key)} className="px-[10px] py-[10px]">
                    {column.filterable !== false ? (
                      <input
                        value={String(filters[column.key] ?? "")}
                        onChange={(e) =>
                          onFilterChange?.(column.key, e.target.value)
                        }
                        placeholder={`Filter ${column.label}`}
                        className="w-full rounded-lg border px-3 py-1.5 text-sm font-normal outline-none"
                      />
                    ) : null}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          <tbody className="divide-y">
            {isLoading ? (
              <tr>
                <td colSpan={colSpan} className="px-[10px] py-6 text-center text-slate-500">
                  Loading...
                </td>
              </tr>
            ) : values.length === 0 ? (
              <tr>
                <td colSpan={colSpan} className="px-[10px] py-6 text-center text-slate-500">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              values.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="transition-colors odd:bg-slate-50 even:bg-white hover:bg-slate-100"
                >
                  <td className="px-[10px] py-[8px]">
                    <input
                      type="checkbox"
                      checked={isRowSelected(row)}
                      onChange={() => toggleRow(row)}
                    />
                  </td>

                  {columns.map((column) => {
                    const value = row[column.key];

                    return (
                      <td
                        key={String(column.key)}
                        className={clsx(
                          "px-[10px] py-[8px] text-left text-[12px] text-[1e293b] ",
                          column.className
                        )}
                      >
                        {column.render
                          ? column.render(value, row)
                          : String(value ?? "")}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-sm text-slate-600 sm:text-left">
          Page {page} of {totalPages}
        </p>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            disabled={!canPreviousPage}
            onClick={() => onPageChange?.(page - 1)}
            className="w-full rounded-lg border px-3 py-2 text-sm hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Previous
          </button>

          <button
            type="button"
            disabled={!canNextPage}
            onClick={() => onPageChange?.(page + 1)}
            className="w-full rounded-lg border px-3 py-2 text-sm hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
