import React from 'react'
import * as Icon from 'react-feather'

const navigation = [
  
  {
    items: [
      {
        url: '/dashboards/dashboard-1',
        icon: <Icon.PlusCircle size={20} />,
        title: 'Cadastro',
        items: []
      },
      {
        url: '/Consulta/Index',
        icon: <Icon.Search size={20} />,
        title: 'Consulta',
        items: []
      }

    ]
  },

]
export default navigation
