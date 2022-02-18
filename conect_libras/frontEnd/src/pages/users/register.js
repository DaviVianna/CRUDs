
import React, { useState } from 'react';
import {withRedux} from '../../lib/redux'

import Form from '../../components/create-account-1'

//import axios from 'axios';

function Register() {

    return(

        <>  

            <Form />
        
        </>
    );


}

export default withRedux(Register)
