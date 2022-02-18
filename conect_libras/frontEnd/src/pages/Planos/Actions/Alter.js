import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import SweetAlert from 'sweetalert';


const Alter = (plan) => {

    let nomePlano;
    nomePlano = plan.plan.plan.plano;
    



  const {register, handleSubmit, errors}                = useForm();
  const [plano, setPlano]                               = useState('');
  const [descricao, setDescricao]                       = useState('');
  const [valor, setValor]                               = useState('');
  const [minutos, setMinutos]                           = useState('');
  const [val_minutos_extra, setVal_minutos_extra]       = useState('');
  const [val_login_extra, setVal_login_extra]           = useState('');
  const [status, setStatus]                             = useState('');




  async function onSubmit() {


    const data = {

      "plano":                  plano,
      "descricao":              descricao,
      "valor":                  valor,
      "minutos":                minutos,
      "valor_minutos_extra":    val_minutos_extra,
      "valor_login_extra":      val_login_extra,
      "status":                 status,

     
    }



    await axios.put(`http://localhost:3000/planos/alterar/${nomePlano}`, data)
    .then(response => {
    
      SweetAlert({

        text: 'Dado (S) atualizado (S) corretamente.',
        icon: "success",
        timer: 1800,
          
      });
            
      setPlano('');
      setDescricao('');
      setValor('');
      setMinutos('');
      setVal_minutos_extra('');
      setVal_login_extra('');
      setStatus('');
    
    
    })
    .catch(error => {

      SweetAlert({

        text: 'Servidor indisponível.',
        icon: "error",
        timer: 1800,
          
      });
    

    });

  }



  return (

    <>

          <form 
           onSubmit={handleSubmit(onSubmit)}
          className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white border-black border-opacity-25 border-2 ml-4 mr-4 mb-4"
          
          >
            
            {/*Plano*/}
              <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                  <span className="text-default text-black font-bold">Plano:</span>
                  <input 
                    name="plano" 
                    type="text"
                    value={plano} 
                    onChange={ (e) => setPlano(e.target.value)}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Plano:"
                  />

                  {errors.plano && (
                      <h4 className="mt-1 text-xs text-red-500">Plano não informado.</h4>
                  )}
                </label>
              </div>


            {/*Descricao*/}
              <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                  <span className="text-default text-black font-bold">Descrição:</span>
                  <input 
                    name="descricao" 
                    type="text"
                    value={descricao} 
                    onChange={ (e) => setDescricao(e.target.value)}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Descrição:"

                  />

                  {errors.descricao && (
                      <h4 className="mt-1 text-xs text-red-500">Descrição não informada.</h4>
                  )}

                </label>
              </div>


              {/*Valor_unitario*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                    <label className="block">
                      <span className="text-default text-black font-bold">Valor:</span>
                        <input 
                          name="valor" 
                          type="text"
                          value={valor} 
                          onChange={ (e) => setValor(e.target.value)}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          placeholder="R$:"
                        />

                      {errors.valor && (
                          <h4 className="mt-1 text-xs text-red-500">Valor não informado.</h4>
                      )}

                    </label>
                </div>

                {/*Minutos  */}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                    <label className="block">
                      <span className="text-default text-black font-bold">Minutos:</span>
                        <input
                          name="minutos" 
                          type="text"
                          value={minutos} 
                          onChange={ (e) => setMinutos(e.target.value)}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          placeholder="Minutos"
                        />

                      {errors.minutos && (
                          <h4 className="mt-1 text-xs text-red-500">Minutos não informado.</h4>
                      )}

                    </label>
                </div>



                {/*Val_Minutos_extra*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-12">
                    <label className="block">
                      <span className="text-default text-black font-bold">Valor de Minutos Extra:</span>
                        <input 
                          name="valor_minutos_extra" 
                          type="text"
                          value={val_minutos_extra} 
                          onChange={ (e) => setVal_minutos_extra(e.target.value)}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          placeholder="R$:"
                        />

                      {errors.valor_minutos_extra && (
                          <h4 className="mt-1 text-xs text-red-500">Valor do Minutos Extra não informado.</h4>
                      )}

                    </label>
                </div>

                {/*Val_Login_Extra*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-12">
                    <label className="block">
                      <span className="text-default text-black font-bold">Valor do Login Extra:</span>
                        <input 
                          name="valor_login_extra" 
                          type="text"
                          value={val_login_extra} 
                          onChange={ (e) => setVal_login_extra(e.target.value)}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          placeholder="R$:"

                        />

                      {errors.valor_login_extra && (
                          <h4 className="mt-1 text-xs text-red-500">Valor de Login Extra não informado.</h4>
                      )}

                    </label>
                </div>
                        

            <div className="w-6   lg:w-auto pt-3 transform -translate-y-20">
              <span className="text-default text-black font-bold">Status:</span> 
                <select 
                  className="form-select block md:w-48 mt-3 text-sm" 
                  name="status"  
                  value={status} 
                  onChange={ (e) => setStatus(e.target.value)}
                  >

                    <option></option>
                    <option>Ativar</option>
                    <option>Desativar</option>

                </select>  
            </div>
            <div>

            </div>

            <div className="transform -translate-x-6 -translate-y-8 w-40 ml-6">
                <input 
                  type="submit" 
                  className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
                  value="Alterar" 
              
                />
            </div>
        </form>


    </>

  );


}

export default Alter
