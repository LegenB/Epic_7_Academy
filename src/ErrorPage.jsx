export const ErrorPage = (/* ErrorCode, Mensaje*/) => {


    //Pedir Error para mostrarlo por pantalla ?

    return (
      <>
          <div className="h-screen w-screen flex justify-center items-center bg-slate-800">
            <div className="flex justify-center items-center w-[300px] h-[200px] sm:w-[400px] sm:h-[200px] bg-slate-700 border border-red-500 rounded-xl drop-shadow-xl">
           
              <div className=" text-2xl ">
                <h1 className=""> <span className="text-red-400">404</span> ERROR</h1>
                <div>Pagina no encontrada</div>
                <br />
                <div className="flex justify-center text-white hover:text-sky-300 border border-blue-700 rounded-lg bg-blue-900/80 p-1 hover:drop-shadow-xl shadow-blue-400">
                  <a href="/"> Go back to Home</a>
                </div>
                
              </div>
            </div>
          </div>
          
          
      </>
      
    )
  }
  