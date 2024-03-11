import Arena  from "../images/Arena.jpeg";
import Celine from "../images/model/spirit-eye-celine.png";

export const HerosWelcome = () => {
    return (
     
        <div className='  h-40 sm:h-60 mt-12 sm:mt-16 w-auto overflow-hidden  rounded-b-3xl  border-b border-teal-500'>
            <div className="relative  h-40 sm:h-60">
                  <img src={Arena} alt="back" className='absolute z-0 h-screen w-full object-cover brightness-[50%] blur-sm rounded-s-md' />
                  <br /><br /><br />
                  
                  <h1 className='absolute inset-0 flex items-center justify-center text-xl lg:text-4xl xl:text-5xl z-20 animate-fade-up animate-duration-[1500ms] animate-ease-in-out'>Heros</h1>
                  <img src={Celine} alt="Celine"  className='absolute -top-24 -left-32   scale-50  w-[400px] h-[450px]   sm:-top-20 sm:-left-20 sm:scale-75    md:-top-4 md:-left-10 lg:top-0 xl:top-8  md:scale-100 lg:left-0 xl:left-10 2xl:left-40 sm:w-[480px] sm:h-[500px] rounded-full lg:scale-100 xl:scale-125 animate-fade animate-duration-[1500ms] animate-ease-in-out'/>
                  <img src={Celine} alt="Celine"  className='absolute -top-24 -right-32  scale-50 -scale-x-50 w-[400px] h-[450px]  sm:-top-20 sm:-right-20 sm:scale-75 sm:-scale-x-75    md:-top-4 md:-right-10 md:scale-100  lg:top-0 xl:top-8  lg:right-0 xl:right-10 2xl:right-40 sm:w-[480px] sm:h-[500px] rounded-full md:-scale-x-100 lg:scale-100 xl:scale-125 lg:-scale-x-100 xl:-scale-x-125 animate-fade animate-duration-[1500ms] animate-ease-in-out'/>
            </div>
          </div>
        
      
    )
}
