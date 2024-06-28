import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'rollno', label: 'Roll Number', minWidth: 100 },
  {
    id: 'email',
    label: 'Email ID',
    minWidth: 170
  }
];

function createData(name, rollno, email) {
  return { name, rollno, email };
}

const rows = [
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
  createData('Aaryan Dahiya', 'B20CI001', 'dahiya.1@iitj.ac.in'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{padding:'40px'}} >
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10,20,30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}