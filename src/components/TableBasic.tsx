import { MaterialReactTable, MRT_ColumnDef, useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { IPerson } from "../types/Person";
import { data } from "../data/personData";

function TableBasic() {
  const columns = useMemo<MRT_ColumnDef<IPerson>[]>(
    () => [
      {
        accessorKey: "name",
        header: "NAME",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
      {
        accessorKey: "age",
        header: "AGE",
        muiTableHeadCellProps: { style: { color: "#2ebf91" } },
        enableHiding: false,
      },
      {
        accessorKey: "country",
        header: "COUNTRY",
        muiTableHeadCellProps: { style: { color: "#64e8f9" } },
        enableHiding: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: false,
    enableGlobalFilter: false,
    initialState: {
      pagination: {
        pageSize: 7,
        pageIndex: 0,
      },
    },
  });

  return <MaterialReactTable  table={table}/>;
}

export default TableBasic;
