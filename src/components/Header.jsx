import React from 'react'
import logo from './../assets/logo.png' 

function Header() {
  return (
    <>
        <header className=' bg-[#cacaca] flex items-center justify-between p-4 pl-16 pr-16'>
            <img className='w-10' src={logo} alt="logo" />

            <nav >
                <ul className='flex flex-row gap-5 p-1 font-medium'>
                    <li>
                        <a href="">Usuario</a>
                    </li>
                    <li>
                        <a href="">Conectarse</a>
                    </li>
                    <li>
                        <a href="">Preguntas frecuentes</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header