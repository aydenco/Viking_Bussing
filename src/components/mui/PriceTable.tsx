import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  plan: string,
  price_per_month: string,
  number_of_rides: string,
  other_perks: string[],
) {
  return { plan, price_per_month, number_of_rides, other_perks };
}

const rows = [
  createData('Platinum', '$49.99', '100', ['Cool stuff, ','More cool stuff, ', 'Even more cool stuff']),
  createData('Gold', '$39.99', '75', ['Cool stuff, ','More cool stuff']),
  createData('Silver', '$29.99', '50', ['Cool stuff']),
];

export default function PriceTable() {
  return (
    <div className='flex-inline'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Price table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subscription</StyledTableCell>
            <StyledTableCell align="center">Price/Month</StyledTableCell>
            <StyledTableCell align="center">Rides</StyledTableCell>
            <StyledTableCell align="center">Other Perks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.plan}>
              <StyledTableCell component="th" scope="row">
                {row.plan}
              </StyledTableCell>
              <StyledTableCell align="center">{row.price_per_month}</StyledTableCell>
              <StyledTableCell align="center">{row.number_of_rides}</StyledTableCell>
              <StyledTableCell align="center">{row.other_perks}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}