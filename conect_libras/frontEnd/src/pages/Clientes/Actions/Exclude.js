import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert';



const Exclude = (user) => {

    const id = user.user.user.id_cliente;

    const [hidden, setHidden] = useState(true);


    async function handleSubmit(e) {

        e.preventDefault();

        await axios.delete(`http://localhost:3000/clientes/excluir/${id}`)
        .then(response => {

            SweetAlert({
                text: 'Deletado corretamente.',
                icon: "success",
                timer: 1800,
              });
  

        })
        .catch(err => {

            SweetAlert({
                text: 'Servidor indisponível.',
                icon: "error",
                timer: 1800,
              });
  
        })


    }


    return(

    <>
        <h5 className="text-center justify-center pb-16">Tem certeza que deseja excluir ? </h5>
            <div className="inline-block transform -translate-x-4">
                <button 
                    className="btn btn-default bg-gray-500 hover:bg-gray-700 focus:outline-none btn-rounded w-24 ml-2 mb-3 float-right uppercase" 
                    type="button" 
                    onClick={ () => setHidden(false) }
                >
                Cancelar
                </button>

                <button 
                className="btn btn-default bg-red-500  hover:bg-red-700 focus:outline-none btn-rounded w-24 float-right uppercase" 
                type="button" 
                onClick={handleSubmit}
                >
                Excluir

                </button>
            </div>
      
    </> 

  )

}


export default Exclude;
