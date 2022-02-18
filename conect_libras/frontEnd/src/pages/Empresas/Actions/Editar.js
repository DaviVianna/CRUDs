import React, { useState }  from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert';


const AlterCompanie = (companie) => {

    const cnpj = companie.companie.cnpj;


    const [cep, setCep]                 = useState('');
    const [logradouro, setLogradouro]   = useState('');
    const [numero, setNumero]           = useState('');
    const [bairro, setBairro]           = useState('');
    const [cidade, setCidade]           = useState('');
    const [estado, setEstado]           = useState('');



    const data = {

        "cep":          cep,
        "logradouro":   logradouro,
        "numero":       numero,
        "bairro":       bairro,
        "cidade":       cidade,
        "estado":       estado,
       

    }


   async function handleSubmit(e) {

        e.preventDefault();

        axios.put(`http://localhost:3000/empresas/alterar/${cnpj}`, data)
        .then(response => {

            SweetAlert({
                text: 'Dado (S) alterado (S) corretamente.',
                icon: "success",
                timer: 1800,
            });

            setCep('');
            setLogradouro('');
            setNumero('');
            setBairro('');
            setCidade('');
            setEstado('');

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
        <form className="pl-8 grid grid-cols-2 md:grid-cols-2 pb-8 mt-8 shadow-lg bg-white">



            {/*cep*/}
            <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">CEP:</span>
                    <input 
                        name="cep" 
                        type="text"
                        value={cep} 
                        onChange={ (e) => setCep(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-white"
                        placeholder="CEP:"
                    />
                </label>
            </div>


            {/*logradouro*/}
            <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Logradouro:</span>
                    <input 
                        name="logradouro" 
                        type="text"
                        value={logradouro}
                        onChange={ (e) => setLogradouro(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-white"
                        placeholder="Logradouro:"
                    />
                </label>
            </div>


            {/*numero*/}
            <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                <label className="block">
                    <span className="text-default text-black font-bold">Número:</span>
                        <input 
                            name="numero" 
                            type="text"
                            value={numero} onChange={ (e) => setNumero(e.target.value)} 
                            className="form-input mt-3 text-xs block w-2/5 bg-white"
                            placeholder="Número"

                        />
                </label>
            </div>


             {/*bairro*/}
             <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                <label className="block">
                    <span className="text-default text-black font-bold">Bairro:</span>
                        <input 
                            name="bairro" 
                            type="text"
                            value={bairro} onChange={ (e) => setBairro(e.target.value)} 
                            className="form-input mt-3 text-xs block w-3/5 bg-white"
                            placeholder="Bairro:"

                        />
                </label>
            </div>



             {/*cidade*/}
             <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-16">
                <label className="block">
                    <span className="text-default text-black font-bold">Cidade:</span>
                        <input 
                            name="cidade" 
                            type="text"
                            value={cidade} onChange={ (e) => setCidade(e.target.value)} 
                            className="form-input mt-3 text-xs block w-3/5 bg-white"
                            placeholder="Cidade:"

                        />
                </label>
            </div>

             {/*Select*/}     
             <div className="w-6  relative h-32 lg:w-auto transform -translate-y-16">
                <span className="text-default text-black font-bold">Estado:</span> 
                    <select 
                        className="form-select block md:w-48 mt-3 text-sm bg-white" 
                        name="estado"
                        type="text"
                        value={estado} 
                          
                    >
                        <option></option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                    </select>  
                </div>
            </form>


        <div className="transform -translate-y-24 w-40 ml-8">
            <button 
                type="submit" 
                className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
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