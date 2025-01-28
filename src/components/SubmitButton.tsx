import React from 'react'

type Props = {
    name:string;
}

export default function SubmitButton(type: Props) {
  return (
    <button
        className='mt-auto w-full bg-teal-300 hover:bg-teal-400 cursor-pointer hover:text-white p-2 rounded-lg font-bold'
    >
        {type.name}
    </button>
  )
}