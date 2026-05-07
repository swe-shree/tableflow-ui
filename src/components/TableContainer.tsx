import { useState } from "react";
import clsx from "clsx";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

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
  const [internalSelectedRows, setInternalSelectedRows] = useState<TData[]>([]);

  const currentSelectedRows = onSelectionChange
    ? selectedRows
    : internalSelectedRows;

  const updateSelectedRows = onSelectionChange
    ? onSelectionChange
    : setInternalSelectedRows;

  const totalPages = Math.max(1, Math.ceil(total / limit));
  const canPreviousPage = page > 1;
  const canNextPage = page < totalPages;

  const colSpan = columns.length + 1;

  function isRowSelected(row: TData) {
    const rowId = (row as Record<string, unknown>)["id"];

    if (rowId !== undefined) {
      return currentSelectedRows.some(
        (item) => (item as Record<string, unknown>)["id"] === rowId
      );
    }

    return currentSelectedRows.includes(row);
  }

  function toggleRow(row: TData) {
    if (isRowSelected(row)) {
      const rowId = (row as Record<string, unknown>)["id"];

      if (rowId !== undefined) {
        updateSelectedRows(
          currentSelectedRows.filter(
            (item) => (item as Record<string, unknown>)["id"] !== rowId
          )
        );
      } else {
        updateSelectedRows(currentSelectedRows.filter((item) => item !== row));
      }
    } else {
      updateSelectedRows([...currentSelectedRows, row]);
    }
  }

  function toggleAllRows() {
    if (currentSelectedRows.length === values.length) {
      updateSelectedRows([]);
    } else {
      updateSelectedRows(values);
    }
  }

  function handleSort(key: keyof TData) {
    if (!enableSorting || !onSortChange) return;

    let nextDirection: SortDirection | undefined;

    if (sortBy !== key) {
      nextDirection = "asc";
    } else if (sortDirection === "asc") {
      nextDirection = "desc";
    } else {
      nextDirection = undefined;
    }

    onSortChange(key, nextDirection);
  }

  const showingFrom = total === 0 ? 0 : (page - 1) * limit + 1;
  const showingTo = Math.min(page * limit, total);

  return (
    <div className="w-full overflow-hidden rounded-2xl  border border-[#E5E7EB] bg-white">
      {enableSearch && (
        <div className="border-b border-[#E5E7EB] p-4">
          <input
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-xl border border-[#E5E7EB] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
          />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-white">
              <th className="w-12 border-t border-[#E5E7EB] px-[10px] py-[10px] text-center">
                <input
                  type="checkbox"
                  checked={
                    values.length > 0 &&
                    currentSelectedRows.length === values.length
                  }
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
                      "border-t border-[#E5E7EB] px-[10px] py-[10px] align-middle text-center font-medium text-[12px] leading-[13.48px] tracking-[0.51px] uppercase text-[#6B7280]",
                      canSort &&
                      "cursor-pointer select-none hover:bg-slate-800",
                      column.headerClassName
                    )}
                  >
                    <div className="flex items-center justify-center gap-2 whitespace-nowrap">
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
                <th className="border-[#E5E7EB]" />

                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className="border-[#E5E7EB] px-[10px] py-[10px]"
                  >
                    {column.filterable !== false ? (
                      <input
                        value={String(filters[column.key] ?? "")}
                        onChange={(e) =>
                          onFilterChange?.(column.key, e.target.value)
                        }
                        placeholder={`Filter ${column.label}`}
                        className="w-full rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-sm font-normal outline-none"
                      />
                    ) : null}
                  </th>
                ))}
              </tr>
            )}
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td
                  colSpan={colSpan}
                  className="px-[10px] py-6 text-center text-slate-800"
                >
                  Loading...
                </td>
              </tr>
            ) : values.length === 0 ? (
              <tr>
                <td
                  colSpan={colSpan}
                  className="px-[10px] py-6 text-center text-slate-800"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              values.map((row, rowIndex) => {
                const rowId = (row as Record<string, unknown>)["id"];
                const rowKey = rowId !== undefined ? String(rowId) : rowIndex;

                return (
                  <tr
                    key={rowKey}
                    className="bg-white transition-colors hover:bg-slate-50"
                  >
                    <td className="border-t border-[#E5E7EB] px-[10px] py-[8px] text-center">
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
                            "border-t border-[#E5E7EB] px-[10px] py-[8px] text-center text-[12px] text-[#1E293B]",
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
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {total > 0 && (
        <div className="relative flex items-center justify-between border-t border-[#E5E7EB] px-4 py-3">

          {/* LEFT SIDE */}
          <p className="text-sm ">
            Showing{" "}
            <span className="font-bold text-[#111827]">
              {showingFrom}–{showingTo}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[#111827]">
              {total.toLocaleString()}
            </span>{" "}
            documents
          </p>

          {/* CENTER PAGINATION */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">

            <button
              type="button"
              disabled={!canPreviousPage}
              onClick={() => onPageChange?.(1)}
              className="rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40"
            >
              {"<<"}
            </button>

            <button
              type="button"
              disabled={!canPreviousPage}
              onClick={() => onPageChange?.(page - 1)}
              className="rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40"
            >
              {"<"}
            </button>

            <p className="text-sm text-[#6B7280]">
              Page{" "}
              <span className="font-semibold text-[#111827]">
                {page}
              </span>{" "}
              of {totalPages}
            </p>

            <button
              type="button"
              disabled={!canNextPage}
              onClick={() => onPageChange?.(page + 1)}
              className="rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40"
            >
              {">"}
            </button>

            <button
              type="button"
              disabled={!canNextPage}
              onClick={() => onPageChange?.(totalPages)}
              className="rounded border border-[#E5E7EB] px-2 py-1 text-sm text-[#6B7280] disabled:opacity-40"
            >
              {">>"}
            </button>

          </div>
        </div>
      )}

    </div>
  );
}