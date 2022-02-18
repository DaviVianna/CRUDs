import React, { useState } from 'react';
import axios from 'axios';


const Exclude = (empresa) => {

    const cnpj = empresa.cnpj;

    const [hidden, setHidden] = useState(true);

    async function handleSubmit(e) {

        e.preventDefault();

        await axios.delete(`http://localhost:3000/empresas/excluir/${cnpj}`)
        .then(response => {

            alert(response.data.msg);

        })
        .catch(err => {

            console.log('Servidor indisponível.')
        })


    }


    return(

    <>
        <h5 className="text-center justify-center pb-16 mt-12">Tem certeza que deseja excluir ? </h5>
            <div className="inline-block transform -translate-x-4">
                <button 
                    className="btn btn-default bg-gray-500 hover:bg-gray-700 focus:outline-none btn-rounded w-24 ml-2 mb-3 float-right uppercase" 
                    type="button" 
                    onClick={ () => setHidden(false)}
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
