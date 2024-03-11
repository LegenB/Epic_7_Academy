import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getHero } from '../helper/getHero';


export const Hero = () => {

    const { heroname } = useParams();
    const [hero, setHero] = useState([])
   
    useEffect(() => {
        getHero(heroname)
          .then(newHero => {
            setHero(newHero);
            
          });
      }, []);

    return (
        <>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Hola Hero</h1>
            <div className=''>{JSON.stringify(hero)}</div>
        </>
        
    )
}
