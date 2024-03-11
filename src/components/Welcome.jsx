import React from 'react'

import Arena from '../images/Arena.jpeg'
import img_Vildred from '../images/vildred.png'

import img_celine from '../images/model/spirit-eye-celine.png'


//Animacion con configuracion de pulso pensado para el logo
// animate-[pulse_4s_infinite_100ms]
//#1caf99
//#1caf66


const Welcome = ({logo}) => {
  return (
    <div className="relative mt-16">
        <img src={Arena} alt="back" className='absolute z-0 h-screen w-full object-cover brightness-[50%] blur-sm rounded-s-md' />
        <br /><br /><br />
        
        <div className="flex justify-center  pt-24 md:pt-32 lg:pt-10" >
            <div className="grid grid-row-2 grid-cols-4 sm:grid-row-1 sm:grid-cols-3 sm:grid-flow-col md:grid-flow-col auto-cols-max  xl:gap-7 2xl:gap-10 ">
                
                <div className="col-span-2 z-10 sm:col-span-1  sm:order-first animate-fade-right animate-once animate-duration-[2000ms] animate-ease-out">
                    <img src={img_Vildred} alt="Logo" className=" w-[200px] h-[315px] sm:w-[250px] sm:h-[400px] lg:w-[400px] lg:h-[600px]  drop-shadow-lg"/>
                
                </div>
                
            
                <div className=" col-span-4 col-start-1 order-first sm:col-span-1 self-center grid justify-items-center md:px-6 lg:px-8 xl:px-10 2xl:px-10 -mt-16  "> 
                    <h1 className="font-bold text-center whitespace-nowrap
                        text-3xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
                        mb-5 -mt-10 z-10 
                        animate-fade-up animate-duration-[2000ms]">
                        Epic 7 Academy
                    </h1>
                    <div className=" size-32 sm:size-40 md:size-56 lg:size-72 relative animate-fade-up animate-duration-[2000ms]">

                        <img src={logo} alt="Logo" className="absolute top-0 right-0 bottom-0 left-0 z-20" />
                        <div className="absolute top-12 right-12 bottom-12 left-12  blur [box-shadow:_0px_0px_60px_20px_#1caf66] rounded-full z-0 "></div>
                        <div className="absolute top-12 right-12 bottom-12 left-12  blur [box-shadow:_0px_0px_30px_20px_#1c8399] rounded-full z-10  "></div>

                    </div>
                    
                </div>      
            

                <div className="col-span-2  sm:col-span-1 z-10 animate-fade-left animate-once animate-duration-[2000ms] animate-ease-out ">
                    <img src={ img_celine} alt="Logo" className="w-[200px] h-[315px]  sm:w-[250px] sm:h-[400px] lg:w-auto lg:h-[580px] drop-shadow-lg "/>
                </div>
                
            </div>
        </div>  
    </div>
    
  )
}


export {
    Welcome as default
}
