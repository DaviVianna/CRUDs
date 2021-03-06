import React, {  useState } from 'react';
import {Edit2 } from 'react-feather';

const ModalHeader = ({onClick}) => (
  <div className="modal-header">
    <h3 className="text-xl font-semibold">Alterar dados</h3>
    <button
      className="modal-close btn btn-transparent"
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
        className={`text-secondary stroke-current inline-block h-5 w-5`}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
)


const ModalBody = () => (
  <div className="relative p-4 flex-auto">
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
  </div>
)




const ModalFooter = ({onClick}) => (
  <div className="modal-footer children-x-2">
    <button className="btn btn-flat btn-red" type="button" onClick={onClick}>
      Close
    </button>
    <button
      className="btn btn-default btn-green btn-rounded"
      type="button"
      onClick={onClick}>
      Save Changes
    </button>
  </div>
)





const ModalEdit = () => {
  const [hidden, setHidden] = useState(true)
  return (
    <>
      <button
        className="btn btn-default bg-orange-500 btn-rounded w-12 h-8 m-1"
        type="button"
        onClick={() => setHidden(false)}>
        <Edit2  size={20} />
      </button>
      {!hidden ? (
        <>
        {/**Modal dentro */}
          <div className="backdrop fade-in fixed inset-0 z-40 bg-black"></div>
          <div className="modal show justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-lg">
              <div className="modal-content">
                <ModalHeader onClick={() => setHidden(true)} />
                <ModalBody />
                <ModalFooter onClick={() => setHidden(true)} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}



export default { ModalEdit }
