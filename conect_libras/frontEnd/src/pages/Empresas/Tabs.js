import React  from 'react'
import { UnderlinedTabs } from '../../components/tabs'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ModalEdit from './Modals/Alter';
//import ModalAlter from './Modals/Edit';
import MdEdit from './Modals/MdEdit';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const Tabs = (data) => {

  const companie = data.data;
  const classes = useStyles();



  const Tab0 = () => (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
              <TableRow>
                  <TableCell align="left"><strong>Razão Social</strong></TableCell>
                  <TableCell align="left"><strong>Contato</strong></TableCell>
                  <TableCell align="left"><strong>Telefone</strong></TableCell>
                  <TableCell align="left"><strong>Celular</strong></TableCell>
                  <TableCell align="left"><strong>E-mail</strong></TableCell>
                  <TableCell align="left"><strong>Plano</strong></TableCell>
                  <TableCell align="left"><strong>Status</strong></TableCell>
                  <TableCell align="left"><strong>...</strong></TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              <TableRow key={companie.cnpj}>  
                  <TableCell align="left">{companie.empresa}</TableCell>
                  <TableCell align="left">{companie.responsavel}</TableCell>
                  <TableCell align="left">{companie.telefone}</TableCell>
                  <TableCell align="left">{companie.celular}</TableCell>
                  <TableCell align="left">{companie.email}</TableCell>
                  <TableCell align="left">Aqui vai o plano</TableCell>  
                  <TableCell align="left">{companie.estatus}</TableCell>
                  <TableCell align="left"><MdEdit companie={companie} /></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

  </>

)



const Tab1 = () => (

  <>


      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell align="left"><strong>CEP</strong></TableCell>
                      <TableCell align="left"><strong>Logradouro</strong></TableCell>
                      <TableCell align="left"><strong>Número</strong></TableCell>
                      <TableCell align="left"><strong>Bairro</strong></TableCell>
                      <TableCell align="left"><strong>Cidade</strong></TableCell>
                      <TableCell align="left"><strong>Estado</strong></TableCell>
                      <TableCell align="left"><strong>...</strong></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key={companie.cnpj}>  
                      <TableCell align="left">{companie.cep}</TableCell>
                      <TableCell align="left">{companie.logradouro}</TableCell>
                      <TableCell align="left">{companie.numero}</TableCell>
                      <TableCell align="left">{companie.bairro}</TableCell>
                      <TableCell align="left">{companie.cidade}</TableCell>
                      <TableCell align="left">{companie.estado}</TableCell>
                      <TableCell align="left"><ModalEdit companie={companie} /></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>




  </>


);








  const tabs = [

    {index: 0, title: 'Empresa', active: true, content: <Tab0 />},
    {index: 1, title: 'Dados Cadastrais', active: true, content: <Tab1 />},
   
  ]



  return (
    <>

        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <UnderlinedTabs tabs={tabs} />
          </div>
        </div>

    </>
  )
}

export default Tabs;
