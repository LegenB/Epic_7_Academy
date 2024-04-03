import React from 'react'
import Logo from '../images/Logo_E7A.png'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 ">

            <div className=' w-[250px] sm:w-[400px] md:w-[500px] mx-auto'>
                <div className='grid grid-cols-2 pt-4'>

                    <div className='flex  justify-center items-center'>
                        <div>

                            <div className="w-full bg-gray-900   flex justify-center">
                                <img src={Logo} alt="" className='size-24' />
                                
                            </div>
                            <div className="w-full bg-gray-900 pb-4 text-center text-blue-gray-200">
                                
                                Epic 7 Academy
                                
                            </div>
                            
                        </div>                       
                    </div>

                    <div className='  flex  justify-center items-center'>
                        <div >

                            <div className=''> 
                                <a href="https://epic7.onstove.com/en/brand/?stayHome=y" target='blank' className='hover:text-cyan-300'>Oficial Page</a> 
                            </div>
                            <div className='pt-2'> 
                                <a href="#" target='blank' className='hover:text-cyan-300'>Otro</a> 
                            </div>

                        </div>  
                    </div>

                </div>
            </div>
           
        </footer>
    )
}
