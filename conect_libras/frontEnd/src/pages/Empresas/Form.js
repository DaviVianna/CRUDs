import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';
import router from 'next/router';


const Formulario = () => {


    const { register, handleSubmit, watch, errors } = useForm();



    let [Cnpj, setCnpj]                 = useState('');
    let [empresa, setEmpresa]           = useState('');
    let [responsavel, setResponsavel]   = useState('');
    let [cep, setCep]                   = useState('');
    let [logradouro, setLogradouro]     = useState('');
    let [numero, setNumero]             = useState('');
    let [bairro, setBairro]             = useState('');
    let [cidade, setCidade]             = useState('');
    let [estado, setEstado]             = useState('');
    let [telefone, setTelefone]         = useState('');
    let [telefone2, setTelefone2]       = useState('');
    let [celular, setCelular]           = useState('');
    let [celular2, setCelular2]         = useState('');
    let [email, setEmail]               = useState('');
    let [email2, setEmail2]             = useState('');
    let [plano, setPlano]               = useState([]);
   

    const dados = {

      "cnpj": Cnpj,
      "empresa": empresa,
      "responsavel": responsavel,
      "cep": cep,
      "logradouro": logradouro,
      "numero": numero,
      "bairro": bairro,
      "cidade": cidade,
      "estado": estado,
      "email": email,
      "email2": email2,
      "telefone": telefone,
      "telefone2": telefone2,
      "celular": celular,
      "celular2": celular2,
   


    }


    //Função para cadastrar
    async function onSubmit() {

        await axios.post('http://localhost:3000/empresas/cadastro', dados)
        .then(response => {
          
            SweetAlert({
              text: 'Empresa cadastrada corretamente.',
              icon: "success",
              timer: 1700,
            });

            setEmpresa('');
            setResponsavel('');
            setCep('');
            setLogradouro('');
            setNumero('');
            setBairro('');
            setCidade('');
            setEstado('');
            setEmail('');
            setEmail2('');
            setTelefone('');
            setTelefone2('');
            setCelular('');
            setCelular2('');
           
            router.push('/empresas/index');

        }).catch(err => {

          SweetAlert({
            text: 'Servidor indisponível.',
            icon: "error",
            timer: 1700,
          });

        });


    }




  return (
            <>

                <form 
                className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white mt-8"
                onSubmit={handleSubmit(onSubmit)}
                >  
                
                  
                    {/*CNPJ*/}
                      <div className=" w-5/12  relative  lg:w-auto pt-8">
                        <label className="block">
                        <span className="text-default text-black font-bold">CNPJ:</span>
                          <input
                              name="cnpj"
                              type="text"
                              value={Cnpj}
                              onChange={ (e) => setCnpj(e.target.value)}
                              className="form-input mt-3 text-xs block w-10/12 bg-white"    
                          />
                        </label>
                      </div>
                      
          

                           {/*Empresa*/}
                           <div className=" w-5/12  relative  lg:w-auto pt-8">
                               <label className="block">
                                 <span className="text-default text-black font-bold">Razão Social:</span>
                                 <input
                                   name="empresa"
                                   type="text"
                                   value={empresa} 
                                   onChange={ (e) => setEmpresa(e.target.value)}
                        
                                   className="form-input mt-3 text-xs block w-10/12 bg-white"
                                  
                                 />
                               </label>
                             </div>
   
   
                             {/*Contato*/}
                               <div className="w-5/12  relative  lg:w-auto transform -translate-y-1 mt-5">
                                   <label className="block">
                                     <span className="text-default text-black font-bold">Contato:</span>
                                       <input
                                           name="responsavel"
                                           type="text"
                                           value={responsavel} 
                                           onChange={ (e) => setResponsavel(e.target.value) }
                                           className="form-input mt-3 text-xs block w-10/12 bg-white"
                                         
                                       />
                                   </label>
                               </div>
   
   
                               
                             {/*CEP*/}
                             <div className="w-5/12  relative  lg:w-auto transform translate-y-7 mt-4">
                                   <label className="block">
                                     <span className="text-default text-black font-bold">CEP:</span>
                                       <input
                                           name="cep"
                                           type="text"
                                           value={cep} 
                                           onChange={ (e) => setCep(e.target.value) }
                                           data-validate="integer"
                                           className="form-input mt-3 text-xs block w-10/12 bg-white"
                                          
                                       />
                                   </label>
                               </div>
   
   
                             {/*Endereço*/}
                             <div className="w-5/12  relative  lg:w-auto transform -translate-y-8 mt-12">
                                   <label className="block">
                                   <span className="text-default text-black font-bold">Endereço:</span>
                                       <input
                                           
                                           name="logradouro"
                                           type="text"
                                           value={logradouro} 
                                           onChange={ (e) => setLogradouro(e.target.value) }
                                           className="form-input mt-3 text-xs block w-10/12 bg-white"
                                          
                                       />
                                   </label>
                               </div>
   
   
                           {/*Numero*/}
                           <div className="w-5/12  relative  lg:w-auto transform -translate-y-8 mt-12">
                                 <label className="block">
                                   <span className="text-default text-black font-bold">Número:</span>
                                     <input
                                         name="numero"
                                         type="text"
                                         value={numero} 
                                         onChange={ (e) => setNumero(e.target.value) }
                                         className="form-input mt-3 text-xs block w-10/12 bg-white"
                                        
                                     />
                                 </label>
                             </div>
   
   
                           {/*Bairro*/}
                           <div className="w-5/12  relative  lg:w-auto transform -translate-y-16 mt-12">
                                 <label className="block">
                                   <span className="text-default text-black font-bold">Bairro:</span>
                                     <input
                                         
                                         name="bairro"
                                         type="text"
                                         value={bairro} 
                                         onChange={ (e) => setBairro(e.target.value) }
                                         className="form-input mt-3 text-xs block w-10/12 bg-white"
                                       
                                     />
                                 </label>
                             </div>
   
   
                           {/*Cidade*/}
                           <div className="w-5/12  relative  lg:w-auto transform -translate-y-16 mt-12">
                                 <label className="block">
                                   <span className="text-default text-black font-bold">Cidade:</span>
                                     <input
                                         
                                         name="cidade"
                                         type="text"
                                         value={cidade} 
                                         onChange={ (e) => setCidade(e.target.value) }
                                         className="form-input mt-3 text-xs block w-10/12 bg-white"
                                      
                                     />
                                 </label>
                             </div>
   
   
                             {/*Select*/}     
                             <div className="w-6  relative  lg:w-auto transform -translate-y-24 mt-12">
                             <span className="text-default text-black font-bold">Estado:</span> 
                                 <select 
                                     className="form-select block md:w-48 mt-3 text-sm bg-white" 
                                     name="estado"
                                     type="text"
                                     value={estado} 
                                     onChange={ (e) => setEstado(e.target.value) }
                             
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
                         
                           {/*Email*/}
                           <div className=" mb-4 relative  lg:w-auto transform -translate-y-24 mt-12">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">E-mail:</span>
                                     <input 
                                         name="email" 
                                         type="email"
                                         value={email} 
                                         onChange={ (e) => setEmail(e.target.value) }
                                         className="form-input mt-3 text-xs block w-3/5 bg-white"
                                        
                                     />
                                 </label>
                             </div>


                          {/*Email2*/}
                           <div className=" mb-4 relative  lg:w-auto transform -translate-y-32 mt-12">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">E-mail alternativo:</span>
                                     <input 
                                         name="email2" 
                                         type="email"
                                         value={email2} 
                                         onChange={ (e) => setEmail2(e.target.value) }
                                         className="form-input mt-3 text-xs block w-3/5 bg-white"
                                     />
                                 </label>
                             </div>
   
   
                             {/*Telefone*/}
                             <div className=" w-5/12  relative  lg:w-auto transform -translate-y-32 mt-12">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">Telefone:</span>
                                     <input 
                                         name="telefone" 
                                         type="text"
                                         value={telefone}
                                         onChange={ (e) =>  setTelefone(e.target.value) }
                                         data-validate="phone"
                                         className="form-input mt-3 text-xs block w-2/5 bg-white"
                                      
                                     />
                                    
                                 </label>
                             </div>
                             
                             {/*Telefone2*/}
                             <div className=" w-5/12  relative h-32 lg:w-auto transform -translate-y-40 mt-12">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">Telefone alternativo:</span>
                                     <input 
                                         name="telefone2" 
                                         type="text"
                                         value={telefone2}
                                         data-validate="phone"
                                         onChange={ (e) =>  setTelefone2(e.target.value) }
                                         className="form-input mt-3 text-xs block w-2/5"
            
                                     />
                                 </label>
                             </div>

            
   
                             {/*Celular*/}
                             <div className="w-5/12  relative lg:w-auto transform -translate-y-40 mt-12">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">Celular:</span>
                                         <input 
                                             name="celular" 
                                             type="text"
                                             value={celular} 
                                             onChange={ (e) => setCelular(e.target.value) }
                                             className="form-input mt-3 text-xs block w-2/5 bg-white"
                                          
                                         />
                                 </label>
                            </div>

                            
                             {/*Celular2*/}
                             <div className="w-5/12  relative lg:w-auto transform -translate-y-40">
                                 <label className="block">
                                     <span className="text-default text-black font-bold">Celular alternativo:</span>
                                         <input 
                                             name="celular2" 
                                             type="text"
                                             value={celular2} 
                                             data-validate="phone"
                                             onChange={ (e) => setCelular2(e.target.value) }
                                             className="form-input mt-3 text-xs block w-2/5 bg-white"
                                         />
                                        
                                 </label>
                            </div>

                            <div className="w-6  relative h-32 lg:w-auto transform -translate-y-40">
                              <span className="text-default text-black font-bold">Plano:</span> 
                                <select 
                                  className="form-select block md:w-48 mt-3 text-sm bg-white" 
                                  name="plano"
                                  type="text"
                                >
                                  <option></option>
                                </select>  
                            </div>
                             <div>
                             </div>
                             <div>
                             </div>
                      <div className="transform -translate-x-8  -translate-y-40  w-40 ml-8">
                          <input 
                            type="submit" 
                            className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
                            value="Cadastrar"
                          />
                      </div>
                      
                    
                  </form>
            </>

          );
}


export default Formulario;