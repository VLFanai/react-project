import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between max-w-[1240px] mx-auto p-4 z-10 bg-current'>
        <h1 className='text-slate-100 font-bold w-full'>fanai<span className='text-orange-400'>.vl</span></h1>
        <li className='flex gap-x-3 list-none'>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">home</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">about</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">services</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">contact</a>
        </li>
        <div>
          <AiOutlineMenu size={20} />
        </div>

        <div className='h-full fixed left-0 px-4 top-0 w-[60%] border-r mx-auto z-0'>
          <li className='grid pt-24 gap-2 uppercase'>
            <a className='text-slate-200 font-semibold hover:text-orange-400' href="">home</a>
            <a className='text-slate-200 font-semibold hover:text-orange-400' href="">about</a>
            <a className='text-slate-200 font-semibold hover:text-orange-400' href="">services</a>
            <a className='text-slate-200 font-semibold hover:text-orange-400' href="">contact</a>
          </li>
        </div>
    </div>
    </div>
  )
}

export default Navbar 