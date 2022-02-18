import React from 'react';
import Tabs from './Tabs';


const Listagem = (company) => {
    
    const data = company.company.company;


    return(
        <>

            <Tabs data={data} />
          
        </>
    );

}


export default Listagem;