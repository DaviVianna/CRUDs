import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const AccountSettings = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  const [checked, setChecked] = useState(true)

  return (


    <div className="w-6/12 bg-gray-300">


      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm mb-4 lg:w-9/12">



        <div className="w-full mb-4 pt-5">
          <label className="block">
            <span className="font-bold pl-5">E-mail Atual:</span>
            <input
              name="email_atual"
              type="email"
              ref={register({required: true})}
              className="form-input mt-4 text-xs block w-full ml-5 bg-white"
              placeholder="seu@e-mail.com"
            />
          </label>
          {errors.currentemail && (
            <p className="mt-1 text-xs text-red-500">
              E-mail não informado.
            </p>
          )}
        </div>

        <div className="w-full mb-4">
          <label className="block">
            <span className="font-bold ml-5">Novo E-mail:</span>
            <input
              name="newemail"
              type="email"
              ref={register({required: true})}
              className="form-input mt-4 text-xs block w-full ml-5 bg-white"
              placeholder="Novo@e-mail.com"
            />
          </label>
          {errors.newemail && (
            <p className="mt-1 text-xs text-red-500">Novo E-mail não informado.</p>
          )}
        </div>


        <div className="w-full pb-12">
          <input
            type="submit"
            className="px-4 py-2 uppercase font-bold text-white bg-blue-700 rounded-lg 
            hover:bg-blue-800 focus:outline-none active:outline-none transform translate-y-6 ml-4   "
            value="Alterar"
          />
        </div>
      </form>
    </div>
  )
}

export default AccountSettings
