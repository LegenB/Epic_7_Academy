import React from 'react'
import Logo from '../images/Logo_E7A.png'

export const Header = () => {


    //text-[#4ee7cc]
    return (

    <header >
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 fixed top-0 w-full mx-auto drop-shadow-lg z-50">

            <div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto max-w-screen-xl">
                
                <a href="/" className="flex items-center">
                    <img src={Logo} className="mr-3 h-8 sm:h-9 " alt="Epic 7 Academy Logo" />
                    <span className="hidden sm:block self-center text-sm sm:text-xl font-semibold whitespace-nowrap text-white">Epic 7 Academy</span>
                </a>

                <div className="flex justify-center sm:justify-between items-center  w-auto order-2">
                    <ul className="flex font-medium flex-row text-sm sm:text-lg
                        md:space-x-5 lg:space-x-8 xl:space-x-8 2xl:space-x-8 mt-0 ">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 rounded bg-primary-700 bg-transparent ltext-primary-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/Heros" className="block py-2 pr-4 pl-3 text-white-700 border-gray-700">Heros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white-700 border-gray-700">Artifact</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white-700 border-gray-700">Credits</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}



