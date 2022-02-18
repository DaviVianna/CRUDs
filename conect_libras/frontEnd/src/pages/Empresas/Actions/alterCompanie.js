import React, { useState }  from 'react';
import axios from 'axios';


const AlterCompanie = () => {

  

    const [empresa, setEmpresa] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [status, setStatus] = useState('');

    const data = {

        "empresa": empresa,
        "responsavel": responsavel,
        "status": status
       
    }


   async function handleSubmit(e) {

        e.preventDefault();

        await axios.put(`http://localhost:3000/empresas/alterar/`, data)
        .then(response => {

            alert(response.data.msg);
            setEmpresa('');
            setResponsavel('');
            setStatus('');
        })
        .catch(err => {

            console.log('Servidor indiponível')

        })
    }

    


    return(


        <>
        <form className="pl-8 grid grid-cols-2 md:grid-cols-2 pb-8 mt-8 shadow-lg bg-white">



            {/*Empresa*/}
            <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Empresa:</span>
                    <input 
                        name="empresa" 
                        type="text"
                        value={empresa} 
                        onChange={ (e) => setEmpresa(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-coolGray-300"
                        placeholder="Nome da empresa:"
                    />
                </label>
            </div>


            {/*Responsavel*/}
            <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Responsável:</span>
                    <input 
                        name="responsavel" 
                        type="text"
                        value={responsavel}
                        onChange={ (e) => setResponsavel(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-coolGray-300"
                        placeholder="Responsável pela empresa:"
                    />
                </label>
            </div>

            
            {/*Select*/}     
            <div className="w-6  relative h-32 lg:w-auto pt-2 transform -translate-y-8">
            <span className="text-default text-black font-bold">Status:</span> 
                <select 
                    className="form-select block md:w-48 mt-3 text-sm bg-coolGray-300" 
                    name="status"  
                    value={status} 
                    onChange={ (e) => setStatus(e.target.value)}
                  >

                    <option></option>
                    <option>Ativar</option>
                    <option>Desativar</option>

                </select>  
            </div>

        </form>
        
        <div className="transform -translate-y-16 w-40 ml-8">
            <button 
                type="submit" 
                className="btn btn-default btn-block bg-blue-700 btn-rounded text-white text-bold uppercase hover:bg-blue-800 focus:outline-none"
                value="Cadastrar"
                onClick={handleSubmit}
              >
                Alterar
            </button>
        </div>
 
        </>

    );
}


export default AlterCompanie;