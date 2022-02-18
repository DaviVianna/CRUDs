import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from 'nookies';
import router from 'next/router';
import axios from 'axios';
import SweetAlert from 'sweetalert';
export const AuthContext = createContext({});


export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  


  useEffect( () => {

    async function loadUserFromCookies() {

      //Pega o token do Cookie
      const { 'clibras-auth': userId } = parseCookies();
    

      if(userId) {

        //Consulta os dados do usuario e renderiza
        await axios.get(`http://localhost:3000/administradores/consultar/${userId}`)
        .then(response => {
          
         setUser(response.data[0]);
       
        })
        .catch(err => {

          console.log('Servidor indisponível.');

        });
        
      
      }
    
    }

    loadUserFromCookies();

  }, []);
  


  async function signIn(data) {

    try{
       
      axios.post('http://localhost:3000/login/logar', data)
      .then(response => {

        //const token = response.data.token;
        const userId = response.data.userData;

       setCookie(undefined, 'clibras-auth', userId, {

            maxAge: 60 * 60 * 1, //1 hour

        })
        
        router.push('/dashboards/dashboard-1');
        

      })
      .catch(err => {

        SweetAlert({
          text: 'Esta conta não existe.',
          icon: "error",
          timer: 1500,
        });

      })

    
    }catch(err) {

      SweetAlert({
        text: 'Servidor indisponível.',
        icon: "error",
        timer: 1600,
      });

    }     

  }


  /*async function signOut() {

    setUser(null);
    router.push('/pages/login');

  }

  */




  return(

    <AuthContext.Provider value={{user, signIn}}>

      {children}

    </AuthContext.Provider>


  );

}

