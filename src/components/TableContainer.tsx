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
    <div className="w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
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
                    selectedRows.length === values.length
                  }
                  onChange={toggleAllRows}
                />
              </th>

              {columns.map((column) => {
                const isSorted = sortBy === column.key;

                const canSort =
                  enableSorting && column.sortable !== false;

                return (
                  <th
                    key={String(column.key)}
                    onClick={() => canSort && handleSort(column.key)}
                    className={clsx(
                      "border-t border-[#E5E7EB] px-[10px] py-[10px] align-middle text-center font-medium text-[12px] leading-[13.48px] tracking-[0.51px] uppercase text-[#6B7280]",
                      canSort &&
                        "cursor-pointer select-none hover:bg-slate-50",
                      column.headerClassName
                    )}
                  >
                    <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                      {column.label}

                      {canSort &&
                        (isSorted && sortDirection === "asc" ? (
                          <FaSortUp />
                        ) : isSorted &&
                          sortDirection === "desc" ? (
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
                          onFilterChange?.(
                            column.key,
                            e.target.value
                          )
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
              values.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
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
              ))
            )}
          </tbody>
        </table>
      </div>

      {total > 0 && (
  <div className="relative flex items-center border-t border-[#E5E7EB] px-4 py-3">

    {/* LEFT SIDE */}
    <p className="text-sm text-[#6B7280]">
      Showing{" "}
      <span className="font-bold text-[#111827]">
        {(page - 1) * limit + 1}–
        {Math.min(page * limit, total)}
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
        <span className="font-bold text-[#111827]">
          {page}
        </span>{" "}
        of{" "}
        <span className="font-bold text-[#111827]">
          {totalPages}
        </span>
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