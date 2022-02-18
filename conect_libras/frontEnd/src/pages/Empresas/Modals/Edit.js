import React, { useState } from 'react';
import { Edit2 } from 'react-feather';
import EditContact from '../Actions/Alter';

const ModalEdit = (companie) => {

    const [hidden, setHidden] = useState(true);
    

    const ModalHeader = ({onClick}) => (
  
      <div className="modal-header bg-coolGray-300">
        <button
          className="modal-close btn btn-transparent  bg-coolGray-300"
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
            className={`text-secondary stroke-current inline-block h-5 w-5 bg-coolGray-300` }>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
  
    )
  
  
    const ModalBody = () => {

      
       return <EditContact companie={companie} />
    }
  
  
  
    return (
        <>
            <button
                className="btn btn-default bg-orange-500 btn-rounded w-10 h-8 m-1 hover:bg-orange-700 focus:outline-none"
                type="button"
                onClick={() => setHidden(false)}
            >
            <Edit2  size={12} />
            </button>

            {!hidden ? (
            <>
                {/**Modal dentro */}
                <div className="backdrop fade-in fixed inset-0 z-40 bg-black"></div>
                <div className="modal show justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-4/5 mx-auto max-w-full bg-coolGray-300">
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
  

export default ModalEdit;