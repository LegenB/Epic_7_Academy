import {ArtifactItem} from './ArtifactItem';

export const ListArtifacts = ({Artifacts = [] }) => {

    // Artifacts.map( (A) => {
    //     console.log(A.id_artifact, A.name, );
    // })

    return (
        <div className=" mt-4 mx-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center ">
            {Artifacts.map( (A) =>(
                <div  key={A.id_artifact} className="relative rounded-xl overflow-auto p-7 animate-fade-right animate-duration-1000 animate-ease-in-out w-min-[390px] w-[400px] sm:w-[410px] w-max-[430px]">
                     <ArtifactItem name={A.name} rarity={A.rarity}  image={A.image} />

                    
                </div>
               
            ))}

        </div>

        // <h1> List Artifacts </h1>

    )
}
