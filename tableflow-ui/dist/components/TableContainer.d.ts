import { TableContainerProps } from '../types/table.types';

export default function TableContainer<TData extends object>({ columns, values, isLoading, emptyMessage, selectedRows, onSelectionChange, page, limit, total, onPageChange, enableSearch, searchValue, onSearchChange, enableSorting, sortBy, sortDirection, onSortChange, enableFiltering, filters, onFilterChange, }: TableContainerProps<TData>): import("react/jsx-runtime").JSX.Element;
