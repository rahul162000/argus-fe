import React, { useEffect, useState } from "react";
import {
  useGlobalFilter,
  useRowSelect,
  useTable,
  useFilters,
  usePagination,
  useAsyncDebounce,
} from "react-table";
import { Pagination } from "@mui/material";

import "./reactTable.css";

function DefaultColumnFilter() {
  return null;
}

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input
          className="transform scale-150"
          type="checkbox"
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="font-semibold">
      Search:{" "}
      <input
        className={`ml-2 px-2 py-1 focus:outline-none rounded-md focus:ring-1 ring-red-1 `}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "1px solid gray",
        }}
      />
    </span>
  );
}

function InsTable({
  columns,
  data,
  show,
  setShow,
  justList,
  setSelected,
  func,
  text,
}) {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    pageCount,
    gotoPage,
    setAllFilters,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      if (!justList) {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: "selection",
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
      }
    }
  );

  useEffect(() => {
    let keys = Object.keys(selectedRowIds);
    let downloads = [];
    keys.forEach(function (item, index) {
      downloads.push({ studentId: data[item]?._id });
    });

    setSelected(downloads);
  }, [selectedRowIds, setSelected, data]);

  // Render the UI for your table
  return (
    <>
      <div
        className={`z-50 w-64 sm:w-72 absolute right-4 sm:right-10 md:right-3 top-10 font-medium text-gray-3 bg-bg-card shadow-button-shadow-2 rounded-2xl ${
          show
            ? "transition-all duration-300 opacity-100 inline-block"
            : "transition-all duration-300 opacity-0 invisible"
        }`}
      >
        <div className="text-gray-2 text-base p-3 font-bold bg-gray-200 rounded-xl flex flex-col">
          <div>
            {headerGroups.map((headerGroup) => (
              <>
                {headerGroup.headers.map((column) => (
                  <>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </>
                ))}
              </>
            ))}
          </div>
          <div
            onClick={() => {
              setShow(false);
              setAllFilters([]);
            }}
            className="ml-auto px-4 py-1 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1 w-full text-center"
          >
            Clear filters
          </div>
        </div>
      </div>

      <div className="pagination flex">
        <Pagination
          count={pageCount}
          shape="rounded"
          onChange={(event, value) => {
            gotoPage(value - 1);
          }}
        />
        {/* <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        /> */}
      </div>
      <div className="overflow-scroll lg:overflow-visible ">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.Header === "Gender" ||
                    column.Header === "City" ||
                    column.Header === "Country" ||
                    column.Header === "Province" ||
                    column.Header === "Phone No." ? (
                      <div className="hidden"></div>
                    ) : (
                      <div
                        className={
                          column.Header === "Action" ? "px-10 m-0 w-full" : ""
                        }
                      >
                        {" "}
                        {column.render("Header")}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.column.id === "Gender" ||
                        cell.column.id === "City" ||
                        cell.column.id === "Country" ||
                        cell.column.id === "Province" ||
                        cell.column.id === "phone" ? (
                          <div className="hidden"></div>
                        ) : (
                          <div
                            className={
                              cell.column.id === "Action"
                                ? "p-0 m-0 border-0 w-full"
                                : ""
                            }
                          >
                            {cell.column.id === "Action" ? (
                              <button
                                onClick={() => func(cell.row.original._id)}
                                className={`${
                                  text === "DELETE"
                                    ? "bg-red-1 border-red-1 hover:text-red-1"
                                    : "bg-green-1 border-green-1 hover:text-green-1"
                                } w-full  text-white py-3.5 font-bold border-2  hover:bg-white  rounded-lg`}
                              >
                                {text}
                              </button>
                            ) : (
                              <>
                                {cell.column.id === "Registration"
                                  ? new Date(cell.value).toDateString()
                                  : cell.render("Cell")}
                              </>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
    </>
  );
}

export default InsTable;
