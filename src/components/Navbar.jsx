import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-4 justify-between'>
        <h1 className='text-slate-100 font-bold'>fanai<span className='text-orange-400'>.vl</span></h1>
        <li className='flex gap-x-1.5 list-none'>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">home</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">about</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">services</a>
          <a className='text-slate-200 font-semibold hover:text-orange-400' href="">contact</a>
        </li>
    </div>
  )
}

export default Navbar