import React, { useState }  from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert';



const AlterContact = (companie) => {

    const cnpj = companie.companie.companie.cnpj


    const [razaoSocial, setRazaoSocial] = useState('');
    const [contato, setContato]         = useState('');
    const [email, setEmail]             = useState('');
    const [telefone, setTelefone]       = useState('');
    const [celular, setCelular]         = useState('');
    const [plano, setPlano]             = useState('');
    const [status, setStatus]           = useState('');
   


    const data = {

        "razao_social": razaoSocial,
        "contato":      contato,
        "telefone":     telefone,
        "celular":      celular,
        "email":        email,
        "plano":        plano,
        "status":       status

    }

    

    async function handleSubmit(e) {

        e.preventDefault();

        await axios.put(`http://localhost:3000/contato/alterar/${cnpj}`, data)
        .then(response => {

            SweetAlert({
                text: 'Dado (S) alterado (S) corretamente.',
                icon: "success",
                timer: 1800,
              });
  
            setRazaoSocial('');
            setContato('');
            setTelefone('');
            setCelular('');
            setEmail('');
            setPlano('');
            setStatus('');
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
        <form className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white mt-8 shadow-lg">

                {/*Razão Social*/}
                <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                    <label className="block">
                        <span className="text-default text-black font-bold">Razão Social:</span>
                        <input 
                            name="razao_social" 
                            type="text"
                            value={razaoSocial} 
                            onChange={ (e) => setRazaoSocial(e.target.value)}
                            className="form-input mt-3 text-xs block w-3/5 bg-white"
                            placeholder="Razão Social:"
                        />
                    </label>
                </div>

                {/*Contato*/}
                <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                    <label className="block">
                        <span className="text-default text-black font-bold">Contato:</span>
                        <input 
                            name="contato" 
                            type="text"
                            value={contato} 
                            onChange={ (e) => setContato(e.target.value)}
                            className="form-input mt-3 text-xs block w-3/5 bg-white"
                            placeholder="Contato:"
                        />

                    </label>
                </div>
            
                {/*Telefone*/}
                <div className=" w-5/12  relative h-32 lg:w-auto pt-5 transform -translate-y-12">
                    <label className="block">
                        <span className="text-default text-black font-bold">Telefone:</span>
                        <input 
                            name="telefone" 
                            type="text"
                            value={telefone}
                            onChange={ (e) => setTelefone(e.target.value)}
                            className="form-input mt-3 text-xs block w-2/5 bg-white"
                            placeholder="(xx) xxxx-xxxx"
                        />
                    </label>
                </div>


                
                {/*Celular*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                    <label className="block">
                        <span className="text-default text-black font-bold">Celular:</span>
                            <input 
                                name="celular" 
                                type="text"
                                value={celular} onChange={ (e) => setCelular(e.target.value)} 
                                className="form-input mt-3 text-xs block w-2/5 bg-white"
                                placeholder="(xx) xxxxx-xxxx"

                            />
                    </label>
                </div>

                {/*Email*/}
                <div className=" mb-4 relative h-32 lg:w-auto pt-5 transform -translate-y-20">
                    <label className="block">
                        <span className="text-default text-black font-bold">E-mail:</span>
                        <input 
                            name="email" 
                            type="email"
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)}
                            className="form-input mt-3 text-xs block w-3/5 bg-white"
                            placeholder="E-mail:"
                        />

                    </label>
                </div>

                {/*Select*/}     
                <div className="w-6  relative h-32 lg:w-auto pt-2 transform -translate-y-20">
                <span className="text-default text-black font-bold">Status:</span> 
                    <select 
                        className="form-select block md:w-48 mt-3 text-sm bg-white" 
                        name="status"  
                        value={status} 
                        onChange={ (e) => setStatus(e.target.value)}
                    >

                        <option></option>
                        <option>Ativar</option>
                        <option>Desativar</option>

                    </select>
                </div>

                {/*Select PLANO*/}     
                <div className="w-6 relative lg:w-auto transform -translate-y-24 mb-16">
                <span className="text-default text-black font-bold">Plano:</span> 
                    <select 
                        className="form-select block md:w-48 mt-3 text-sm bg-white" 
                        name="plano"  
                        value={plano} 
                        onChange={ (e) => setPlano(e.target.value)}
                    >
                        <option></option>
                        <option>Plano 1</option>
                        <option>Plano 2</option>
                    </select>
                </div>
            </form>

        <div className="transform -translate-y-20 w-40 ml-8">
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


export default AlterContact;