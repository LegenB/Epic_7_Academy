

import { HeroItem } from "../components/HeroItem";




export const ListHeros = ({Heroes = [], }) => {



    return (
        <div className=" mt-4 mx-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center min-h-[670px] ">
            {Heroes.map( (H) =>(
                <div  key={H.id_heroe} className="relative rounded-xl overflow-auto p-7 animate-fade-right animate-duration-1000 animate-ease-in-out w-min-[390px] w-[400px] sm:w-[410px] w-max-[430px]">
                     <HeroItem  nombre={H.name} elemento={H.element} clase={H.class} rareza={H.rarity}  heroname={H.name} icon={H.icon} />
                </div>
               
            ))}

        </div>
    )
}
