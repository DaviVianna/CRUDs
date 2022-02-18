import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import SweetAlert from 'sweetalert';


const Form = () => {


  const {register, handleSubmit, errors} = useForm();

  const [plano, setPlano]                               = useState('');
  const [descricao, setDescricao]                       = useState('');
  const [valor, setValor]                               = useState('');
  const [minutos, setMinutos]                           = useState('');
  const [val_minutos_extra, setVal_minutos_extra]       = useState('');
  const [val_login_extra, setVal_login_extra]           = useState('');




  async function onSubmit() {


    const data = {

      "plano":                  plano,
      "descricao":              descricao,
      "valor":                  valor,
      "minutos":                minutos,
      "valor_minutos_extra":    val_minutos_extra,
      "valor_login_extra":      val_login_extra,
     
    }

    

     await axios.post('http://localhost:3000/planos/cadastro', data)
      .then(response => {

        SweetAlert({

          text: 'Plano cadastrado corretamente.',
          icon: "success",
          timer: 1800,
            
        });
  
        setPlano('');
        setDescricao('');
        setValor('');
        setMinutos('');
        setVal_minutos_extra('');
        setVal_login_extra('');


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
          className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white pb-8 mt-5  border-black border-opacity-25 border-2">
            
            {/*Plano*/}
              <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                  <span className="text-default text-black font-bold">Plano:</span>
                  <input
                    name="plano" 
                    type="text"
                    value={plano}
                    onChange={ (e) => setPlano(e.target.value)}
                    ref={register({
                      required: true, 



                      
                    })}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Plano:"
                  />

                  {errors.plano && (
                      <h4 className="mt-1 text-sm text-red-500">Plano não informado.</h4>
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
                    ref={register({
                      required: true,
                   
                    })}
                    value={descricao} onChange={ (e) => setDescricao(e.target.value)}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Descrição:"

                  />

                  {errors.descricao && (
                      <h4 className="mt-1 text-sm text-red-500">Descrição não informada.</h4>
                  )}

                </label>
              </div>


              {/*Valor*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                    <label className="block">
                      <span className="text-default text-black font-bold">Valor:</span>
                        <input 
                          name="valor" 
                          type="text"
                          value={valor}
                          onChange={ (e) => setValor(e.target.value)}
                          ref={register({
                            required: true, 


                      
                          })}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          laceholder="R$:"
                        />

                      {errors.valor && (
                          <h4 className="mt-1 text-sm text-red-500">Valor não informado.</h4>
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
                          ref={register({
                            required: true, 
                            

                          })}
                          className="form-input mt-3 text-xs block w-10/12 bg-white"
                          placeholder="Minutos"
                        />

                      {errors.minutos && (
                          <h4 className="mt-1 text-sm text-red-500">Minutos não informado.</h4>
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
                          ref={register({
                            required: true,


                      
                          })}
                          className="form-input mt-3 text-sm block w-10/12 bg-white"
                          placeholder="R$:"
                        />

                      {errors.valor_minutos_extra && (
                          <h4 className="mt-1 text-sm text-red-500">Valor de Minutos Extra não informado.</h4>
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
                          ref={register({
                            required: true, 


                      
                          })}
                          className="form-input mt-3 text-sm block w-10/12 bg-white"
                          placeholder="R$:"
                        />

                      {errors.valor_login_extra && (
                          <h4 className="mt-1 text-sm text-red-500">Valor de Login Extra não informado.</h4>
                      )}

                    </label>
                </div>
    
              <div className="transform -translate-y-10 w-40 ml-1">
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

export default Form
