import React from 'react'

export default function Title({text, className}:{text:string, className?:string}) {
  return (
    <div className={className}>
        <h1 className='text-3xl font-bold group-hover:text-purple-600 transition-all'>{text}</h1>
        <div className='w-40 h-1.5 bg-purple-600 rounded-full translate-x-2 group-hover:-translate-x-2 transition-all'></div>
        <div className='w-40 h-1.5 bg-blue-600 rounded-full group-hover:translate-x-2 transition-all'></div>
    </div>
  )
}
