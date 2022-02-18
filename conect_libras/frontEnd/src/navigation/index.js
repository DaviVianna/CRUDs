import React from 'react'
import * as Icon from 'react-feather'

const navigation = [
  
  {
    title: 'Conect Libras',
    items: [  
     
      {
        url: '/dashboards/dashboard-1',
        icon: <Icon.Home size={20} />,
        title: 'Home',
        items: []
      },


      {
      
        icon: <Icon.PhoneCall size={20} />,
        title: 'Chamadas',
        items: [

          {

            url: '/calls/done',
            icon: <Icon.PhoneIncoming size={20} />,
            title: 'Chamadas Realizadas',

          },

          {

            url: '/calls/received',
            icon: <Icon.HelpCircle size={20} />,
            title: 'Chamadas Recebidas',

          }
          
        ]
      },

  

      {
        url: '/Operadores/Index',
        icon: <Icon.Headphones size={20} />,

        title: 'Operadores',
        items: []
      },

      {
  
  
        url: '/Administradores/Index',
        icon: <Icon.Users size={20} />,
        title: 'Administradores',
        items: []
      },

      {
        url: '/Empresas/Index',
        icon: <Icon.Home size={20} />,
        title: 'Empresas',
        items: []
      },


      {
        url: '/Planos/Index',
        icon: <Icon.BookOpen size={20} />,
        title: 'Planos',
        items: []
      },

    ]

  }




  

/*
  {
    title: 'Docs',
    items: [
      {
        url: '/documentation',
        icon: <Icon.HelpCircle size={20} />,
        title: 'Documentation',
        items: []
      }
    ]
  },

*/
  

]
export default navigation
