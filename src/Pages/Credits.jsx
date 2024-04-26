import React from 'react'
import linkedin from '../images/Social/Link.png'
import github from '../images/Social/Git.png'





export const Credits = () => {

  return (
      <div className='mt-16 min-h-screen relative bg-space bg-no-repeat bg-cover h-full bg-fixed '>
        <div className='flex  items-center justify-center h-[600px]'>
          
          <div className='bg-slate-950  w-96 h-56 border-x border-b-2 border-blue-400 rounded-3xl p-2 group'>

            <div className=' bg-gradient-to-r from-gray-900/80  w-full h-full border-2 border-blue-400 rounded-3xl group-hover:shadow-md group-hover:shadow-emerald-300 flex flex-col items-center justify-center transition'>
              
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl '>Byron H.</h1>

                <p className='text-gray-300 '>Junior Developer</p>
              </div>
              <div className='flex mt-3'>

                <a href="https://github.com/LegenB" target="_blank"  className=' '>
                  <img src={github} alt="GitHub" className='size-7 hover:scale-110  '/>
                </a>
                <a href="https://www.linkedin.com/in/byron-huerta-olmos-9072b4219/" target="_blank" className='ml-3 '>
                  <img src={linkedin} alt="Linkedin" className='size-7 hover:scale-110   '/>
                </a>
                  

              </div>               
            </div>
          </div>
          
          <div className='mx-6'></div>

          <div className='bg-slate-950  w-96 h-56 border-x border-b-2 border-blue-400 rounded-3xl p-2 group'>
            <div className=' bg-gradient-to-r from-gray-900/80  w-full h-full border-2 border-blue-400 rounded-3xl group-hover:shadow-md group-hover:shadow-emerald-300 flex flex-col items-center justify-center transition'>
              
              <div className='flex flex-col items-center'>
                <h1 className='text-3xl '>Victor A.</h1>

                <p className='text-gray-300 '>Junior Developer</p>
              </div>
              <div className='flex mt-3'>

                <a href="https://github.com/Victor-Aedo" target="_blank"  className=' '>
                  <img src={github} alt="GitHub" className='size-7 hover:scale-110  '/>
                </a>
                <a href="https://www.linkedin.com/in/victor-aedo-24abb7282/" target="_blank" className='ml-3 '>
                  <img src={linkedin} alt="Linkedin" className='size-7 hover:scale-110   '/>
                </a>
                  

              </div>               
            </div>
          </div>
        </div>
       
      </div>
    )
}
