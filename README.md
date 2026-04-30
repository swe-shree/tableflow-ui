# tableflow-ui

A flexible, typed React data table component with sorting and pagination.

## Installation

```bash
npm install tableflow-ui
```

## Usage

```tsx
import { DataTable } from "tableflow-ui";

const columns = [
  { key: "name", header: "Name", sortable: true },
  { key: "age",  header: "Age",  sortable: true },
];

const data = [
  { name: "Alice", age: 30 },
  { name: "Bob",   age: 25 },
];

<DataTable data={data} columns={columns} pageSize={10} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | required | Array of row objects |
| `columns` | `Column<T>[]` | required | Column definitions |
| `pageSize` | `number` | `10` | Rows per page |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyMessage` | `string` | `"No data available"` | Empty state text |
| `onRowClick` | `(row: T) => void` | — | Row click handler |

## License

MIT
