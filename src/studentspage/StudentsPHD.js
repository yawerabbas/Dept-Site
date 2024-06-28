import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, rollnumber, Research, supervisor, photo , b , m,a) {
  return {
    name,
    rollnumber,
    Research,
    supervisor,
    photo,
    education: [
      {
        Btech: b,
        Mtech: m,
        About:a,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <img src={row.photo} alt={row.name} style={{ width: '50px' }} />
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.rollnumber}</TableCell>
        <TableCell align="right">{row.Research}</TableCell>
        <TableCell align="right">{row.supervisor}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Education
              </Typography>
              <Table size="small" aria-label="purchases" style={{backgroundColor:"#F9F5F6"}}>
                <TableHead>
                  <TableRow>
                    <TableCell>BTech</TableCell>
                    <TableCell>Mtech</TableCell>
                    <TableCell>Research</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.education.map((historyRow) => (
                    <TableRow key={historyRow.Btech}>
                      <TableCell>{historyRow.Btech}</TableCell>
                      <TableCell>{historyRow.Mtech}</TableCell>
                      <TableCell>{historyRow.About}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    supervisor: PropTypes.string.isRequired,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        Btech: PropTypes.string.isRequired,
        Mtech: PropTypes.string.isRequired,
        About: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    rollnumber: PropTypes.string.isRequired,
    Research: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Ananya',
    'P21CI002',
    'Rock Mechanics, DEM, Engineering Geology',
    'Dr. Ravi',
    'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/Ananya_image-2022-04-07-16-33-pm.jpg',
    '-',
    'MMM',
    "About My project",
  ),
  createData(
    'Ashish Gupta',
    'P21CI003',
    'Atmospheric science and Air pollution',
    'Dr. Deepika Bhattu',
    'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/Ashish%20Gupta_image-2022-04-07-18-39-pm.jpg',
    'Dr. B. R. Ambedkar National Institute of Technology Jalandhar (2017)',
    '-',
    "About My project",
  ),
  
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} style={{padding:"100px"}}>
      <Table aria-label="collapsible table" >
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Roll Number</TableCell>
            <TableCell align="right">Research Area</TableCell>
            <TableCell align="right">Supervisor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
