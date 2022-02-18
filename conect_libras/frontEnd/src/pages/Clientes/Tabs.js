import React  from 'react'
import { UnderlinedTabs } from '../../components/tabs'

//Components
import Tabela from './Table';
import Form from './Form';



const Tabs = (company) => {

  const cnpj = company.company.company.cnpj
    

  const Tab0 = () => (

    <>

      <Tabela cnpj={cnpj} />

    </>

  )
  

  const Tab1 = () => (

      <>
   
        <Form cnpj={cnpj} />
 
      </>

  )
  



  const tabs = [

    {index: 0, title: 'Clientes cadastrados',   active: true, content: <Tab0 />},
    {index: 1, title: 'Cadastro de Clientes',   active: false, content: <Tab1 />},
  ]



  return (
    <>

        <div className="flex flex-wrap text-black font-bold uppercase">
          <div className="w-full p-4 text-black font-bold uppercase">
            <UnderlinedTabs tabs={tabs} />
          </div>
        </div>

    </>
  )
}

export default Tabs;
