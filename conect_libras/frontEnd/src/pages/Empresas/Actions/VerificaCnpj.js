import React, { useState } from 'react';
import Link from 'next/link';
import { CNPJa } from 'cnpja'
import PageCadastro from '../../Empresas_cadastro/Index';
const cnpja = new CNPJa('c6c05a09-2647-4c72-a055-4d6ac8506134-c3d4d1fd-8937-4ef2-a4fd-37e1d678521c')

let CNPJ;

const verificaCnpj = () => {

    const [cnpj, setCnpj] = useState('');
    const [companie, setCompanie] = useState([]);
    const [condition, setCondition] = useState(false);

  
    const data = {

        "cnpj": cnpj,
    }

 
            
    const buscaCnpj = async (e) => {

        e.preventDefault();
        
        try {
    
           const result = await cnpja.companies(`${data.cnpj}`)
           setCompanie(result);
           setCondition(true);
            
        
        } catch (error) {
        
            console.log(error)
            setCondition(false);
        
        } 
    }

  
    return(

        <>

            <form className="ml-4 mb-4 mr-4 pt-4 pl-8 grid grid-cols-2 md:grid-cols-2 bg-white pb-32 mt-8 shadow-lg border-black border-opacity-25 border-2">
                
                <input 
                    name="cnpj" 
                    type="text"
                    value={cnpj} 
                    onChange={ (e) => setCnpj(e.target.value)}
                    className="form-input mt-3 text-xs block w-3/5 "
                    placeholder="CNPJ:"
                     
                />

                <div className="transform -translate-x-48 translate-y-3 w-40 ml-8">
                    <button 
                        type="submit" 
                        className="btn btn-default btn-block bg-blue-700 btn-rounded text-white text-bold uppercase hover:bg-blue-800 focus:outline-none"
                        value="Cadastrar"
                        onClick={buscaCnpj} 
                    >
                        Pesquisar
                    </button>
                </div>
               
            </form>

            {/*Aqui vai a lógica que se o CNPJ for válido, ele renderiza o formulario para o cadastro*/}
            {condition ? (

                 <Link href="/Empresas_cadastro/Index">
                    <PageCadastro companie={companie} />
                 </Link>
               
            ): null}

              
        </>
    );
}

export default verificaCnpj;
