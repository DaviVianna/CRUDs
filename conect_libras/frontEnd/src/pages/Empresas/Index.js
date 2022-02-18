import React, { useState } from 'react'
import Link from 'next/link';
import {withRedux} from '../../lib/redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Layout from '../../layouts';
import Table from './Table';
import VerificaCnpj from '../Empresas_cadastro/VerificaCnpj';


function Index() {

    
    const [hidden, setHidden] = useState(true);


    //Estilização do Botão 
    const useStyles = makeStyles((theme) => ({
        root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        },
    }));


    const classes = useStyles();


    return(

         <> 
            <Layout>
                <div className="pt-8 pb-6  float-right">
                    <Link href="/Empresas_cadastro/Index">
                        <div className={classes.root}>
                            <Button
                                variant="contained" 
                                color="primary"
                                disableElevation
                                onClick={() => setHidden(false)}
                            >   
                                <AddIcon/>
                                add empresa
                            </Button>
                        </div>
                    </Link>
                </div>
                <Table />
            </Layout>
        </>

    );

}

export default withRedux(Index)