import type { ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export type TableColumn<TData extends object> = {
  key: keyof TData;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: TData[keyof TData], row: TData) => ReactNode;
  className?: string;
  headerClassName?: string;
};

export type TableContainerProps<TData extends object> = {
  columns: TableColumn<TData>[];
  values: TData[];

  isLoading?: boolean;
  emptyMessage?: string;

  selectedRows?: TData[];
  onSelectionChange?: (rows: TData[]) => void;

  page?: number;
  limit?: number;
  total?: number;
  onPageChange?: (page: number) => void;

  enableSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  enableSorting?: boolean;
  sortBy?: keyof TData | string;
  sortDirection?: SortDirection;
  onSortChange?: (key: keyof TData, direction: SortDirection | undefined) => void;

  enableFiltering?: boolean;
  filters?: Partial<Record<keyof TData, string>>;
  onFilterChange?: (key: keyof TData, value: string) => void;
};