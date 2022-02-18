import React, { useContext, useState } from 'react';
import SweetAlert from 'sweetalert';
import { AuthContext } from '../../Contexts/Auth';


const Login1 = () => {

  const [checked, setChecked] = useState(true);
  const { signIn } = useContext(AuthContext);

  const [user, setUser]         = useState('');
  const [password, setPassword] = useState('');




  const data = {

    "usuario": user, 
    "senha": password,

  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    
    try{

      
      await signIn(data);

    }catch(err) {

      SweetAlert({
        text: 'Servidor indisponível.',
        icon: "error",
        timer: 1600,
      });

    }

      
  }






  return (
    <>

      <form
        className="flex flex-col text-sm mb-4 w-full">
        <div className="w-full mb-6">
          <label className="block">
            <span className="text-default text-orange-700 font-bold">Usuário</span>
            <input
              name="usuario"
              value={user}
              onChange={ (e) => setUser(e.target.value)}
              type="text"
              className="form-input mt-5 text-xs block w-full bg-white"
              placeholder="Seu usuário:"
            />
          </label>
          
        </div>

        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default text-orange-700 font-bold">Senha</span>
            <input
              name="senha"
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
              className="form-input mt-5 text-xs block w-full bg-white"
              placeholder="*******"
            />
          </label>
          
        </div>
        
        <div className="w-full mt-4">
          <button
           
            className="
            px-4 py-3 uppercase font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 
            focus:outline-none active:outline-none transition duration-500 ease-in-out 
            transform hover:-translate-y-1 hover:scale-110 ..."
            value="Entrar"
            onClick={handleSubmit}
          >
          Entrar
          </button>
        </div>
      </form> 

    
    </>
  )
}

export default Login1
