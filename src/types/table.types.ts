export type TableColumn<T> = {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type DataTableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pageSize?: number;
  emptyMessage?: string;
};