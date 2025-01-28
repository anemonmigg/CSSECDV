import React from 'react'
import getFormInputType from "../helpers/getFormInputType"

interface formInput {
  name: string;
}

function FormInput(input: formInput) {
  const error:string = "*An error"
  const errorClass:string = "text-red-500 italic visible"

  return (
    <div className='w-full flex flex-col gap-1'>
      {/*Label element for input*/}
      <label className='text-2xl font-bold'>
        {input.name}
      </label>

      {/*Input element where user will input*/}
      <input
        name={input.name}
        className='w-full h-12 bg-yellow-100 rounded-lg p-4 font-medium'
        type={getFormInputType(input.name)}
      />
      
      {/*Error element for user feedback*/}
      <div className={errorClass}>{error}</div>
    </div>
  )
}

export default FormInput