import React, { useState } from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Search } from 'react-feather';
import axios from 'axios';

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

/*function createData(name, calories, fat) {
  return { name, calories, fat };
}



const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
];
*/


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

  const rows = data.data;
  
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



  const [dataFilter, setDataFilter] = useState([]);
  const [busca, setBusca]             = useState('');


  //Função para fazer a busca 
  const handleInputChange = async (e) => { 

    e.preventDefault();
    
    const { value } = e.target;

    const searchData = {

      "name": value

    }

    if(!value) {

      setDataFilter([]);

    }else {

      await axios.post('http://localhost:3000/consultarName', searchData)
      .then(response => {
  
        setDataFilter(response.data);
  
      })
      .catch(err => {
  
        null
  
      })

    }
   
  }


  return (                  
    
    <>

    
    
    <input
      type="text"
      name="name"
      onChange={handleInputChange}
      className="bg-gray-700 text-white w-64 rounded-md pl-3 mt-3 h-5 focus:outline-none pt-4 pb-4"
      placeholder="Busque pelo Nome..."
    >
    </input>


    
 
<TableContainer component={Paper} className="border-black border-opacity-25 border-2 mt-5">
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>           
            <StyledTableCell align="left"><strong>#</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Name</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Namespace</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Type</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Description</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>QaPageId</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Solution</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>Platform</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>...</strong></StyledTableCell>
            <StyledTableCell align="left"><strong>...</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            /*rowsPerPage > 0 ? rows.slice(age * rowsPerPage, page * rowsPerPage + rowsPerPage)*/

            
            dataFilter.length > 0 ? 

              dataFilter.map(dadoFiltrado => {

                return(
                  <>

                    <TableRow key={dadoFiltrado.Id}>
                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Id}
                      </TableCell>

                      <TableCell style={{ width: 160 }} align="left" >
                          {dadoFiltrado.Name}
                      </TableCell>

                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Namespace}
                      </TableCell>

                      
                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Type}
                      </TableCell>

                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Description}
                      </TableCell>

                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.QaPageId}
                      </TableCell>


                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Solution}
                      </TableCell>


                      <TableCell style={{ width: 160 }} align="left">
                          {dadoFiltrado.Platform}
                      </TableCell>


                      <TableCell style={{ width: 160 }} align="left">
                          <ModalEdit />
                      </TableCell>

                      <TableCell style={{ width: 160 }} align="left">
                          <ModalExclude />
                      </TableCell>
                    </TableRow>

                  </>
                )
              })
            
            : 

              rows.map((product) => (

                <TableRow key={product.Id}>

                    <TableCell style={{ width: 160 }} align="left">
                        {product.Id}
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="left" >
                        {product.Name}
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="left">
                        {product.Namespace}
                    </TableCell>

                    
                    <TableCell style={{ width: 160 }} align="left">
                        {product.Type}
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="left">
                        {product.Description}
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="left">
                        {product.QaPageId}
                    </TableCell>


                    <TableCell style={{ width: 160 }} align="left">
                        {product.Solution}
                    </TableCell>


                    <TableCell style={{ width: 160 }} align="left">
                        {product.Platform}
                    </TableCell>


                    <TableCell style={{ width: 160 }} align="left">
                        <ModalEdit product={product} />
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="left">
                        <ModalExclude product={product} />
                    </TableCell>

                </TableRow>
        
              ))

        
          }

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

    </>
  );
}
