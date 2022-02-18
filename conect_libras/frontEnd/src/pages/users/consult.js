import React from 'react'
import {withRedux} from '../../lib/redux'
import Datatable from '../tables/datatables';


function lists() {

    return(

         <> 
    
            <Datatable />
      
        </>
         
        
    );


}

export default withRedux(lists)