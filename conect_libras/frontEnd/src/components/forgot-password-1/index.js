import React, {useState} from 'react'
import Link from 'next/link'
import {useForm} from 'react-hook-form'


const ForgotPassword = () => {
  const {errors} = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  const [checked, setChecked] = useState(true)

  return (
    <>
     <div className="mt-6">

        <label className="text-sm font-bold text-orange-600 block pt-4">E-mail:</label>
        <input name="email" type="email" className="w-full p-1 resize-none border-none rouded mt-5 appearance-none outline-none"  placeholder="Seu E-mail:"></input>
        {errors.email && (
            <p className="mt-1 text-xs text-red-500">E-mail não informado.</p>
          )}

        
       <div className="w-full pt-8">
          <input type="submit" className="btn btn-default content-center bg-orange-600 text-white font-bold btn-rounded  hover:bg-orange-700 
            focus:outline-none active:outline-none transition duration-500 ease-in-out 
            transform hover:-translate-y-1 hover:scale-110 ..." value="Recuperar Senha" />
        </div>
     </div>


    </>
  )
}

export default ForgotPassword
