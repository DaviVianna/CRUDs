import React, { useState } from 'react';
import { Delete, Edit2 } from 'react-feather';
import axios from 'axios';
import {useTable, useSortBy, usePagination, useRowSelect} from 'react-table'
import {PageWithText, Page} from '../pagination';




{/**MODAL DE EDITAR */}
const ModalEdit = () => {

  const [hidden, setHidden] = useState(true)


  const ModalHeader = ({onClick}) => (


    <div className="modal-header bg-gray-300">
      <button
        className="modal-close btn btn-transparent bg-gray-300"
        onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`text-secondary stroke-current inline-block h-5 w-5 bg-gray-300`}>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>


  )


  const ModalBody = () => {


      const [operator, setOperator]         = useState('');
      const [user, setUser]                 = useState('');
      const [password, setPassword]         = useState(''); 
      const [file, setFile]                 = useState('');
    


      async function handleSubmit(event) {


        

      
          event.preventDefault();
              
              
              //Instânciando o FormData
              const formData = new FormData();
              
              
              //Nome dos Inputs
              formData.set('operador', operator);
              formData.set('usuario',  user);
              formData.set('senha',    password);
              formData.set('file',     file);
              
          
              const data = {
          
                  method: 'PUT',
                  body: formData,
          
              }
      
      
              await fetch(`http://localhost:3000/operadores/alterar/${id}`, data)
              .then(response => {
      
              alert('Operador (A) atualizado (A) corretamente. ');
              setOperator('');
              setUser('');
              setPassword('');
              
      
      
              });
      
  
      
      }   
  

    return(
      <>

        <div>
            <form className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-gray-300" method="post" encType="multipart/form-data">
            
            {/*Nome*/}
              <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                  <span className="text-default text-black font-bold">Operador (A):</span>
                  <input name="operador" type="text"
                  
                    value={operator} onChange={ (e) => setOperator(e.target.value)}
                  
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Operador (A):"
                  />
                </label>
              </div>




            {/*Usuário*/}
              <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                  <span className="text-default text-black font-bold">Usuário:</span>
                  <input name="usuario" type="text"

                    value={user} onChange={ (e) => setUser(e.target.value)}
                  
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Usuário:"
                  />

                </label>
              </div>


              {/*Senha*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                    <label className="block">
                      <span className="text-default text-black font-bold">Senha:</span>
                        <input name="senha" type="password"
                          
                            value={password} onChange={ (e) => setPassword(e.target.value)}
                          
                            className="form-input mt-3 text-xs block w-10/12 bg-white"
                            placeholder="Senha:"
                        />
                    </label>
                </div>
          

              {/*Foto do Usuário*/}          
              <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-10">
                <span className="text-default text-black font-bold">Foto:</span> 
                    <input type="file" name="file" 

                        onChange={ (e) => setFile(e.target.files[0]) }

                        className="transform translate-y-10 -translate-x-8"

                    /> 
              </div>


              
              {/**Status do operador */}
              <div className="w-5/12  relative h-32 lg:w-auto pt-3 transform -translate-y-20">
                <span className="text-default text-black font-bold">Status:</span> 
                  <select className="form-select block w-6/12 text-sm mt-3">
                    <option>Desativado</option>
                    <option>Ativo</option>
                    
                  </select> 
              </div>

            </form>
          </div>

          
          <div className="transform -translate-y-20 w-40 ml-8">
            <button type="submit" 
              className="btn btn-default btn-block bg-blue-700 btn-rounded text-white text-bold uppercase hover:bg-blue-800 focus:outline-none"
              value="Cadastrar" onClick={handleSubmit}
            >
              Alterar 

            </button>
          </div>
          

      </>

    );

  }



  return (
    <>
      <button
        className="btn btn-default bg-orange-500 btn-rounded w-10 h-8 m-1"
        type="button"
        onClick={() => setHidden(false)}>
        <Edit2  size={12} />
      </button>
      {!hidden ? (
        <>
        {/**Modal dentro */}
          <div className="backdrop fade-in fixed inset-0 z-40 bg-black"></div>
          <div className="modal show justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-4/5 mx-auto max-w-full bg-gray-300">
              <div className="modal-content">
                <ModalHeader onClick={() => setHidden(true)} />
                <ModalBody />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );

}
























const IndeterminateCheckbox = React.forwardRef(
  ({indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (

      <input type="checkbox" ref={resolvedRef}{...rest} className="h-4 w-4" />

    )
  }
)

const Datatable = ({columns, data, button}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: {pageIndex, pageSize, selectedRowIds}
  } = useTable(
    {
      columns,
      data,
      button,
      initialState: {pageIndex: 0, pageSize: 10}
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({getToggleAllRowsSelectedProps}) => (
            <>
              {/** <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />*/}
             
            </>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({row}) => (
            <>
                {/*<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />*/}

              <ModalEdit />
             
           
              
            </>
          )
        },
        ...columns
       
      ])
    }
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
      
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="flex flex-row items-center justify-start">
                    <span>{column.render('Header')}</span>
                    
                    {/* Add a sort direction indicator */}
                    <span className="ltr:ml-auto rtl:mr-auto">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <icon className="icon-arrow-down text-xxs" />
                          
                        ) : (
                          <icon className="icon-arrow-up text-xxs" />
                        )
                      ) : (
                        ''
                      )}

                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
             
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
        
           
              
      <div className="flex flex-row items-center justify-between my-4">
        <div className="flex flex-wrap items-center justify-start children-x-2 pagination">
          {pageIndex !== 0 && (
            <PageWithText
              onClick={() => gotoPage(0)}
              color="text-default">
              início
            </PageWithText>
          )}
          {canPreviousPage && (
            <PageWithText
              onClick={() => previousPage()}
              color="text-default">
              Anterior
            </PageWithText>
          )}
          {canNextPage && (
            <PageWithText
              onClick={() => nextPage()} disabled={!canNextPage}
              color="text-default">
              Próximo
            </PageWithText>
          )}
          {pageIndex !== pageCount - 1 && (
            <PageWithText
              onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
              color="text-default">
              Anterior
            </PageWithText>
          )}
        </div>

        <span>
          Página{' '}
          <b>
            {pageIndex + 1} de {pageOptions.length}
          </b>{' '}
        </span>

        <select
          className="form-select text-sm"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}>
          {[10, 25, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Exibir {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Datatable
