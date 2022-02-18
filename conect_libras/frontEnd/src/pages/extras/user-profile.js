import React, { useContext } from 'react'
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import {UnderlinedTabs} from '../../components/tabs'
import AccountSettings from '../../components/profile/account-settings'
import DeleteAccount from '../../components/profile/account-settings/Account-Exclude'
import { AuthContext } from '../../Contexts/Auth'
const tabs = [
  
  {index: 0, title: 'Meu perfil', content: <AccountSettings />},
  {index: 1, title: 'Conta', content: <DeleteAccount /> },
 
]
const Index = () => {

    const { user } =  useContext(AuthContext);
  
  
  return(

    <Layout>
  
    {/*widget*/}
    <div className="flex items-center justify-start px-2">
      <div className="flex-shrink-0 w-24">
        <img
          src={user?.foto}
          alt="image"
          className="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2"
        />
      </div>
      <div className="py-2 px-2">
        <p className="text-default text-base font-bold whitespace-no-wrap">
          {user?.nome}
        </p>
        <h6 className="text-sm">
          {user.tipo}
        </h6>
      </div>
    </div>
    {/*end widget*/}

    <div className="flex flex-wrap">
      <div className="w-full p-4 ">
        <UnderlinedTabs tabs={tabs} />
      </div>
    </div>

  </Layout>
  

  );
  
}

export default withRedux(Index)
