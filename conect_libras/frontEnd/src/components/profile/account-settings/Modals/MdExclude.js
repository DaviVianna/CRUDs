import React, { useState } from 'react';
import { Trash } from 'react-feather';
import { useRouter } from 'next/router'
import axios from 'axios';
import SweetAlert from 'sweetalert';

const ModalExclude = () => {

  let id;


  const [hidden, setHidden] = useState(true);
  const router = useRouter();

  async function handleChangeSubmit(e) {

    e.preventDefault();


    await axios.delete(`http://localhost:3000/administradores/excluir/${id}`)
    .then(response => {

        if(response.data.codigo == 1) {

          SweetAlert({

            text: 'Conta deletada corretamente.',
            icon: "success",
            timer: 1800,
              
          });

          router.push('/pages/login');
          

        }else {

          SweetAlert({

            text: 'Erro ao excluir. Tente novamente mais tarde.',
            icon: "error",
            timer: 1800,
              
          });

        }

    }).catch(error => {

      SweetAlert({

        text: 'Servidor indisponível.',
        icon: "error",
        timer: 1800,
            
      });
  

    });

  }


  
    const ModalHeader = ({onClick}) => (
      <div className="modal-header bg-white">
        <button
          className="modal-close btn btn-transparent "
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
            className={`text-secondary stroke-current inline-block h-5 w-5 text-black`}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    )
  
  
    const ModalBody = () => {

      return(

        <>
          
          <h5 className="text-center justify-center pb-16 mt-8">Tem certeza que deseja excluir sua conta?</h5>
              <div className="inline-block transform -translate-x-4">
                  <button 
                    className="btn btn-default bg-gray-500 hover:bg-gray-700 focus:outline-none btn-rounded w-24 ml-2 mb-3 float-right uppercase" 
                    type="button" 
                    onClick={() => setHidden(true)}
                    >
                    Cancelar
      
                  </button>
      
                  <button 
                    className="btn btn-default bg-red-500 btn-rounded w-24 float-right uppercase hover:bg-red-700 focus:outline-none" 
                    type="button" 
                    onClick={handleChangeSubmit}
                    >
                    Excluir
                  </button>
              </div>

        </>

      )
      
    }
  
  
    return (
      <>
      
        <button
          className="btn btn-default bg-red-600 btn-rounded w-10 h-8 m-1 hover:bg-red-800 focus:outline-none"
          type="button"
          onClick={() => setHidden(false)}
          
          >
            <Trash size={12} />
        </button>
  
  
        {!hidden ? (
          <>
                {/**Modal dentro */}
                <div className="backdrop fade-in fixed inset-0 z-40 bg-black"></div>
                <div className="modal show justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative mx-auto w-6/12 bg-white">
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




export default ModalExclude;