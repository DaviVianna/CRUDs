import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { setCookie, parseCookies } from 'nookies';
import router from 'next/router';
import firebase from '../Firebase/Auth';
import SweetAlert from 'sweetalert';




export const AuthContext = createContext({});





export function AuthProvider({ children }) {

  //const [user, setUser] = useState(null)
  //const [loading, setLoading] = useState(true)

  /*useEffect( () => {

    const { 'clibras-token': token } = parseCookies();

    if(token) {

       //Pega os dados do usuario e renderiza ele
        
    }else {

      console.log('Erro ao decodificar o token');

    }


  }, [])
  */


  async function signIn(usuario, senha) {

    try{
       
      //setLoading(true);
      return firebase.auth().signInWithEmailAndPassword(usuario, senha)

      .then(response => {

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


  async function signOut() {

    try{

      router.push('/pages/login');
      return firebase.auth().signOut()
      .then(response => {

        console.log('vc saiu da aplicação');

      })
      .catch(err => {


        console.log('erro ao sair da aplicaçao');

      })

    }catch(err) {

      console.log('erro no firebase ao sair da app');

    } 


  }




  return(

    <AuthContext.Provider value={ {signIn, signOut} }>

      {children}

    </AuthContext.Provider>


  );

}