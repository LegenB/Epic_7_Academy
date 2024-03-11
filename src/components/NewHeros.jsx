import React from 'react'
import img_Vildred from '../images/vildred.png'

const NewHeros = () => {
  return (

    <>
        <div className="flex justify-center pt-10">

            <h2 className="text-4xl">New Heros</h2>

          
        </div>
       
        <div className="pt-10 mx-1 sm:mx-5 flex justify-center h-[420px] md:h-[600px] lg:h-[710px] xl:h-[710px] 2xl:h-[750px] max-h-[710px] ">
            <div className=' max-w-[1290px] w-full rounded-3xl shadow-lg border-2 border-teal-400/70 overflow-hidden  relative  '> 
                <div className=" bg-[url('./images/E7.png')] bg-no-repeat bg-cover size-full z-1 bg-top absolute blur-sm brightness-[50%]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0">
                    <div className="grid grid-rows-3 grid-flow-col gap-0 sm:gap-5 h-full ">
                        <div className="row-span-3 justify-self-center self-center ">
                            <img src={img_Vildred} alt="foto" className=" max-h-[600px] min-h-[200px]" />
                        </div>
                        <div className=" ml-2 -mb-14 sm:-mb-0 sm:ml-5 row-span-2 col-span-1 xl:col-span-2  2xl:col-span-2  self-center "> 
                            <h3 className=" text-lg sm:text-2xl sm:mb-9">
                                Vildred
                            </h3>
                            <p className=' text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus alias blanditiis est reprehenderit labore quam nisi, et assumenda minima odio ducimus corporis. Consectetur, soluta tempora ex iure deserunt suscipit?
                            </p>   
                        </div>
                        <div className=" ml-2  sm:ml-5 text-center row-span-1 col-span-1 xl:col-span-2  2xl:col-span-2  self-center ">  
                            <h1 className=' text-sm'>Elemento signo y otra wea xd o puede ser boton?</h1>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        


        <br /><br /><br /><br /><br />
    </>
  )
}


export {
    NewHeros  as default
} 