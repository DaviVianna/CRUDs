import React, { useState } from 'react';
import Link from 'next/link';
import { CNPJa } from 'cnpja';
import Form from '../Empresas/Form';
const cnpja = new CNPJa('4a02dffd-5e32-4752-aac4-3b5909c3183e-799fcca0-2275-4d1c-9093-77542a53598b');
import SweetAlert from 'sweetalert';
//import Br from 'br-validator';



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
            console.log(result);
           setCondition(true);
            
        
        } catch (error) {
        
            SweetAlert({
                text: 'CNPJ não cadastrado na receita federal.',
                icon: "error",
                timer: 1600,
              });
            
            setCondition(false);
    
        } 
    }

  
    return(

        <>

            <form className="ml-4 mb-4 mr-4 pt-4 pl-8 grid grid-cols-2 md:grid-cols-2 bg-white pb-32 mt-8 shadow-lg border-black border-opacity-25 border-2">
                
                

                <label className="block">
                    <span className="text-default text-black font-bold">CNPJ:</span>
                        <input 
                            name="cnpj" 
                            type="text"
                            value={cnpj} 
                            onChange={ (e) => setCnpj(e.target.value)}
                            className="form-input mt-3 text-xs block w-3/5"
                            data-validate="cnpj"
                            placeholder="CNPJ:"
                        
                        />              
                </label>

                <div className="transform -translate-x-48 translate-y-8 w-40 ml-8">
                    <button 
                        type="submit" 
                        className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
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
                    <Form companie={companie} />
                 </Link>
               
            ): null}

              
        </>
    );
}

export default verificaCnpj;
