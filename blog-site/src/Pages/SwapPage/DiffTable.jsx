import * as React from "react"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material"

const columns = [
  { id: "model", label: "Model" },
  { id: "engine", label: "Engine" },
  { id: "ratio1", label: "Ratios" },
  { id: "ratio2", label: "" },
  { id: "ratio3", label: "" },
  { id: "ratio4", label: "" },
  { id: "casesize", label: "Case Size" },
  { id: "type", label: "Type" },
]

function createData(
  model,
  engine,
  ratio1,
  ratio2,
  ratio3,
  ratio4,
  casesize,
  type
) {
  return { model, engine, ratio1, ratio2, ratio3, ratio4, casesize, type }
}

const rows = [
  createData("316 before 9/1984", "M10", "3.64", "", "", "", "small", "open"),
  createData("316 after 9/1984", "M10", "3.91", "", "", "", "small", "open"),
  createData("316i", "M10", "4.10", "3.91", "", "", "small", "open"),
  createData("316i", "M40", "4.45", "4.27", "", "", "small", "open"),
  createData("318i", "M10", "4.10", "3.91", "3.64", "", "small", "open"),
  createData("318i 2 & 4 door", "M40", "4.45", "4.27", "", "", "small", "open"),
  createData("318iC & iT", "M40", "4.45", "4.27", "", "", "small", "open"),
  createData("318is", "M42", "4.10", "", "", "", "small", "open"),
  createData("320i before 9/85", "M20", "3.46", "", "", "", "small", "open"),
  createData("320i 9/85 - 9/87", "M20", "3.91", "3.64", "", "", "small", "open"),
  createData("320i after 9/87", "4.10", "", "", "", "", "small", "open"),
  createData("320iC & iT", "M20", "4.45", "4.27", "", "", "small", "open"),
  createData("323i before 9/84", "M20", "3.23", "", "", "", "medium", "open"),
  createData("323i after 9/84", "M20", "3.46", "", "", "", "medium", "open"),
  createData("324d", "M21", "3.46", "", "", "", "small", "open"),
  createData("324td", "M21", "3.25", "", "", "", "medium", "open"),
  createData("325i before 9/86", "M20", "4.10", "3.91", "3.73", "3.46", "medium", "open, sport: LSD-Mech"),
  createData("325i after 9/86", "M20", "4.10", "3.91", "3.73", "3.64", "medium", "open, sport: LSD-Mech"),
  createData("325iC before 9/86", "M20", "3.91", "3.46", "", "", "medium", "open, sport: LSD-Mech"),
  createData("325iC after 9/86", "M20", "3.91", "3.64", "", "", "medium", "open, sport: LSD-Mech"),
  createData("325iT", "M20", "3.91", "", "", "", "medium", "open"),
  createData("325iX", "M20", "3.91", "3.73", "3.64", "", "medium", "LSD-Visc"),
  createData("325iXT", "M20", "4.10", "3.91", "", "", "medium", "LSD-Visc"),
  createData("325, 325e US-models", "M20", "3.23", "2.93", "", "", "medium", "open, sport: LSD-Mech"),
  createData("325e before 9/85", "M20", "2.79", "", "", "", "medium", "open, sport: LSD-Mech"),
  createData("325e 9/85 - 12/86", "M20", "2.93", "", "", "", "medium", "open, sport: LSD-Mech"),
  createData("325e after 12/86", "M20", "3.46", "3.25", "", "", "medium", "open, sport: LSD-Mech"),
  createData("M3 US-models", "S14", "4.10", "", "", "", "medium", "LSD-Mech"),
  createData("M3", "S14", "3.25", "3.15", "", "", "medium", "LSD-Mech"),
  createData("M3 Cabrio", "S14", "3.25", "", "", "", "medium", "LSD-Mech"),
  createData("M3 Evo 1, 2, & 3", "S14", "4.10", "", "", "", "medium", "LSD-Mech"),
]

export default function DiffTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Box sx={{ marginTop: "30px" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}
