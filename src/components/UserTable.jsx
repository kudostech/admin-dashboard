import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";

const UserTable = () => {
  const data = useMemo(
    () => [
      { name: "Alice", age: 25, email: "alice@example.com" },
      { name: "Bob", age: 30, email: "bob@example.com" },
      { name: "Charlie", age: 35, email: "charlie@example.com" },
      { name: "David", age: 28, email: "david@example.com" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      { Header: "Email", accessor: "email" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded shadow-md">
      <input
        value={state.globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search users"
        className="mb-4 p-2 w-full rounded border border-gray-300 
                   bg-white dark:bg-gray-800 
                   text-black dark:text-white 
                   placeholder-gray-500 dark:placeholder-gray-400"
      />
      <table
        {...getTableProps()}
        className="w-full border border-gray-300 dark:border-gray-700"
      >
        <thead className="bg-gray-100 dark:bg-gray-800">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-3 border border-gray-300 dark:border-gray-700"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-3 border border-gray-300 dark:border-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
