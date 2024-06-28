import * as React from 'react';
import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function createData(project, year, pi, copi, fundingagency,amount) {
  return { project, year, pi, copi, fundingagency,amount };
}

const rowsone = [
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
  createData('Mechanical Response of sedimentary rocks under extreme conditions:Implications for cryogenic fracking', "2019-24", "Dr. Debanjan Guha Roy", "NA", "DST-Inspire","35.00" ),
];


export default function Research() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [rowstwo, setRowstwo] = useState([]);
  const [rowsone, setRowsone] = useState([]);

  useEffect(() => {
    loadData2();
    loadData1();
  }, []);

  const loadData2 = async () => {
    try {
      const response = await fetch("http://localhost:3500/api/displaydatacompletedProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setRowstwo(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const loadData1 = async () => {
    try {
      const response = await fetch("http://localhost:3500/api/displaydatacompletedProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setRowsone(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Ongoing Projects" {...a11yProps(0)} />
          <Tab label="Completed Projects" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell align="center">Year</TableCell>
                  <TableCell align="center">PI</TableCell>
                  <TableCell align="center">CO PI</TableCell>
                  <TableCell align="center">Funding Acency</TableCell>
                  <TableCell align="center">Amount(in Lacs)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsone.map((rowone) => (
                  <TableRow
                    key={rowone.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {rowone.project}
                    </TableCell>
                    <TableCell align="center">{rowone.year}</TableCell>
                    <TableCell align="center">{rowone.pi}</TableCell>
                    <TableCell align="center">{rowone.copi}</TableCell>
                    <TableCell align="center">{rowone.fundingagency}</TableCell>
                    <TableCell align="center">{rowone.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  
                  <TableCell align="center">PI</TableCell>
                  <TableCell align="center">CO PI</TableCell>
                  <TableCell align="center">Funding Agency</TableCell>
                  <TableCell align="center">Amount(in Lacs)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowstwo.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Project}
                    </TableCell>

                    <TableCell align="center">{row.PI}</TableCell>
                    <TableCell align="center">{row.CoPI}</TableCell>
                    <TableCell align="center">{row.FundingAgency}</TableCell>
                    <TableCell align="center">{row.Amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </TabPanel>

    </Box>
  );
}