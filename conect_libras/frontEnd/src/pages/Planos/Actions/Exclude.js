import React, { useState }  from 'react';
import axios from 'axios';



const Exclude = (id) => {

    let planId;
    planId = id.id;
      
    const [hidden, setHidden] = useState(true);

    
    async function handleChangeSubmit(e) {

        e.preventDefault();

        await axios.delete(`http://localhost:3000/planos/excluir/${planId}`)
        .then(response => {

            if(response.data.codigo == 1) {

                alert('Plano deletado corretamente.');
              
    
            }else {
    
                alert('Erro ao deletar o Plano, tente novamente mais tarde .');
    
            }

        }).catch(error => {

        alert('Servidor Indisponível');

        });

    }

    

    return(

        <>

            <h5 className="text-center justify-center pb-16 mt-8">Tem certeza que deseja excluir este Plano ? </h5>
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
    ); 
}


export default Exclude;