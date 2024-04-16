import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getHero } from '../helper/getHero';
import Cartel from "../images/Backgrounds/Cartel.png"
import Ataque from '../images/StatsIcon/Atk.png'
import Hp from '../images/StatsIcon/Hp.png'
import Def from '../images/StatsIcon/Def.png'
import Spp from '../images/StatsIcon/Spp.png'
import Crit from '../images/StatsIcon/Crit.png'
import CritDmg from '../images/StatsIcon/CrtDmg.png'
import Eff from '../images/StatsIcon/Eff.png'
import EfRes from '../images/StatsIcon/Efres.png'
import Dual from '../images/StatsIcon/Dual.png'







export const Hero = () => {

  const { heroname } = useParams();
  const [hero, setHero] = useState([]);
  const [im, setIm] = useState(null); // Class
  const [rt, setRt] = useState(null); // Rarity
  const [el, setEl] = useState(null); // Element
  const [ho, setHo] = useState(null); // Horoscopo
  
  useEffect(() => {
      getHero(heroname)
        .then(newHero => {
          setHero(newHero);
          heroClass(newHero.class) 
          heroRarity(newHero.rarity)
          heroElement(newHero.element)
          heroHoroscope(newHero.horoscope)
               
        });
    }, []);

  //importar de forma dinamica las imagenes Clases
  const heroClass = async (clas) => {
    let imageUrl;
    switch (clas) {
      case 'Knight':
        imageUrl = await import('../images/Clases/Knight.png');
        break;
      case 'Mage':
        imageUrl = await import('../images/Clases/Mage.png');
        break;
      case 'Soul Weaver':
        imageUrl = await import('../images/Clases/Soul Weaver.png');
        break;
      case 'Thief':
        imageUrl = await import('../images/Clases/Thief.png');
        break;
      case 'Warrior':
        imageUrl = await import('../images/Clases/Warrior.png');
        break;
      case 'Ranger':
        imageUrl = await import('../images/Clases/Ranger.png');
        break;
      default:
        break;
    }
    setIm(imageUrl.default);
  };

  //Importat de forma dinamica las imagenes Rareza
  const heroRarity = async (rarity) => {
    let rar
    switch (rarity) {
      case 5:
        rar = await import('../images/Star/5-star.png')
        break;
      case 4:
        rar = await import('../images/Star/4-star.png')
        break;
      case 3:
        rar = await import('../images/Star/3-star.png')
        break;
      default:
        break;
    }
    setRt(rar.default)
  }

  //Importat de forma dinamica las imagenes Elemento
  const heroElement = async (element) => {
    let elem
    switch (element) {
      case 'Ice':
        elem = await import('../images/Elemento/Ice.png')
        break;
      case 'Fire':
        elem = await import('../images/Elemento/Fire.png')
        break;
      case 'Earth':
        elem = await import('../images/Elemento/Earth.png')
        break;
      case 'Light':
        elem = await import('../images/Elemento/Light.png')
        break
      case 'Dark':
        elem = await import('../images/Elemento/Dark.png')
        break
      default:
        break;
    }
    setEl(elem.default)
  }
  const heroHoroscope = async (horoscope) =>{
    let horos
    switch (horoscope) {
      case 'Aquarius':
        horos = await import('../images/Signo/Aquarius.png');
        break;
      case 'Aries':
        horos = await import('../images/Signo/Aries.png');
        break;
      case 'Cancer':
        horos = await import('../images/Signo/Cancer.png');
        break;
      case 'Gemini':
        horos = await import('../images/Signo/Gemini.png');
        break;
      case 'Leo':
        horos = await import('../images/Signo/Leo.png');
        break;
      case 'Libra':
          horos = await import('../images/Signo/Libra.png');
          break;
      case 'Pisces':
        horos = await import('../images/Signo/Pisces.png');
        break;
      case 'Sagittarius':
        horos = await import('../images/Signo/Sagittarius.png');
        break;
      case 'Scorpio':
        horos = await import('../images/Signo/Scorpio.png');
        break;
      case 'Taurus':
        horos = await import('../images/Signo/Taurus.png');
        break;
      case 'Virgo':
        horos = await import('../images/Signo/Virgo.png');
        break;
    
      default:
        break;
    }
    setHo(horos.default)
  }

  
  
  return (
      <>
      <div className='relative bg-space lg:bg-tabern bg-no-repeat bg-cover h-full bg-fixed'>
        <div className='h-full w-auto mt-8 sm:mt-10 md:mt-16  lg:flex lg:justify-center lg:mx-4 '>
            <div className='flex items-center mx-auto w-[250px] h-[400px] sm:w-[400px] sm:h-[600px] lg:mx-0 lg:w-[500px]  lg:h-[800px] animate-fade animate-duration-1000  lg:animate-fade-right lg:animate-duration-[1500ms]'>
              <img src={hero.model} alt="" className='bg-auto bg-no-repeat bg-center  '/>
            </div>
            
            <div className='relative sm:mx-10 w-auto h-96 flex justify-center lg:w-[500px] lg:h-[800px] lg:mx-0 animate-fade animate-duration-1000  lg:animate-fade-down lg:animate-duration-[1500ms]'>
              
              <img src={Cartel} alt="" className='absolute hidden lg:block size-96 h-full  w-full brightness-75 ' />
              <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-3xl border border-cyan-800 bg-gradient-to-r from-teal-950/90 to-indigo-950/90 lg:from-yellow-950/0 lg:to-red-950/0 lg:rounded-none lg:border-none'></div>
            
              <div className=' w-80 h-96 absolute lg:top-[45%]  lg:left-[46%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2'>
                {/* typo rareza clase */}
                <div className='flex items-center justify-around  my-1'>
                  <div className='flex items-center'>
                    <img src={el} alt="" className='size-8'/>
                    <img src={rt} alt="" className='h-6 w-auto ml-1'/>

                  </div>
                  <div className='flex items-center'>
                    <img src={im} alt="" className='size-8'/>
                    <img src={ho} alt="" className='size-8 ml-1'/> 

                  </div>    
                </div>

                <h1 className=' text-center mt-4 sm:mt-4 lg:mt-0 mb-4 text-xl sm:text-2xl'>{hero.name}</h1>
                <ol className=' sm:text-lg md:text-[22px]'>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Ataque} alt="icon" className=' sm:size-5 lg:size-6 mx-2' />
                          <h1>Attack</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.attack}</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Def} alt="icon" className=' sm:size-5 lg:size-6 mx-2' />
                          <h1>Defense</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.defense}</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Hp} alt="icon" className=' sm:size-5 lg:size-6 mx-2' />
                          <h1>Health</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.health}</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Spp} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Speed</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.speed}</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Crit} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Critical Hit Chance</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.critical_hit_chance} %</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={CritDmg} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Critical Hit Damage</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.critical_hit_damage} %</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Eff} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Effectiveness</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.effectiveness} %</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={EfRes} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Effect Resistance</h1>
                          
                          <h1 className='ml-auto mr-2'>{hero.effect_resistance} %</h1>
                        </div>  
                    </li>
                    <li className=" lg:mb-4">
                        <div className='flex items-center'>
                          <img src={Dual} alt="icon" className=' sm:size-5 lg:size-6 mx-2'/>
                          <h1>Dual Attack Chance</h1>
                          
                          <h1 className='ml-auto mr-2'>3.0 %</h1>
                        </div>  
                    </li>
                </ol>
                
              </div>
          

            </div>
        </div>
     
        
      </div>
      
      
    
        
      


          
      </>
      
  )
}
