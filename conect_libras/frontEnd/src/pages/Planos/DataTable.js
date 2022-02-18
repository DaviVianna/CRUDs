import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,  makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
//Import Modals
import ModalEdit from './Modals/ModalEdit';
import ModalExclude from './Modals/ModalExclude';




const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);






const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable(data) {

    const rows =  data.data;
  


  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="border-black border-opacity-25 border-2 mt-5">
      <Table className={classes.table} aria-label="custom pagination table">
       <TableHead>
          <TableRow>
            <StyledTableCell align="left"><strong>Plano</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Valor</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Minutos</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Minutos Extra</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Login Extra</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Status</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>...</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>...</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((plan) => (

            <TableRow key={plan.id_plano}>

        
                <TableCell style={{ width: 40 }} align="left">
                    {plan.plano}
                </TableCell>
                
                <TableCell style={{ width: 40 }} align="left">
                  R$ {plan.valor_unitario}
                </TableCell>

                <TableCell style={{ width: 90 }} align="left">
                    {plan.minutos}
                </TableCell>

                <TableCell style={{ width: 90 }} align="left">
                  R$ {plan.valor_minutos_extra}
                </TableCell>

                <TableCell style={{ width: 90 }} align="left">
                  R$ {plan.valor_login_extra}
                </TableCell>

                <TableCell style={{ width: 90 }} align="left">
                {

                  plan.estatus == 'ATIVO' ? (
                    
                    <div className="bg-green-500 rounded-lg text-center p-1">{plan.estatus}</div>

                  ) : <div className="bg-red-600 rounded-lg text-center p-1">{plan.estatus}</div>

                }
                </TableCell>
                <TableCell style={{ width: 90 }} align="left">
                    <ModalEdit plan={plan} />
                </TableCell>

                <TableCell style={{ width: 90 }} align="left">
                      <ModalExclude plan={plan} />
                </TableCell>

            </TableRow>
        
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
