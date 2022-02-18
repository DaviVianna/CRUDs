import React, { useState } from 'react';
//import { PlusCircle } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import VerificaCnpj from '../Actions/VerificaCnpj';



 

const ModalCnpj = () => {

    const [hidden, setHidden] = useState(true);


    //Estilização do Botão 
    const useStyles = makeStyles((theme) => ({
        root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        },
    }));
  


    //Botão de abrir o Modal
    const ContainedButtons = () =>  {

        const classes = useStyles();

        return(

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

        );
    }  

    


    const ModalHeader = ({onClick}) => (
  
      <div className="modal-header bg-gray-200">
        <button
          className="modal-close btn btn-transparent  bg-gray-200"
          onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`text-secondary stroke-current inline-block h-5 w-5 bg-gray-200` }>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
  
    )
  
  
    const ModalBody = () => {

      
       return(

        <VerificaCnpj />
        
       );
    }
  
  
  
    return (

        
        <>  

            <div className="float-right">
                <ContainedButtons />
            </div>
               
            {!hidden ? (
            <>
                {/**Modal dentro */}
                <div className="backdrop fade-in fixed inset-0 z-40 bg-black"></div>
                <div className="modal show justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-4/5 mx-auto max-w-full bg-gray-200">
                        <div className="modal-content">
                            <ModalHeader onClick={() => setHidden(true)} />
                            <ModalBody />
                        </div>
                    </div>
                </div>
            </>
            ) : null}
        </>

    );
  
  }
  

export default ModalCnpj;