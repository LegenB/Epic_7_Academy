

//import Diene from '../images/iconModel/Diene-icon.png'
import Star_3 from '../images/Star/3-star.png'
import Star_4 from '../images/Star/4-star.png'
import Star_5 from '../images/Star/5-star.png'

//import importarIcono from '../images/iconModel'

// iconos de Clases
import Mage from "../images/Clases/Mage.png";
import Healer from '../images/Clases/Soul Weaver.png';
import Thief from '../images/Clases/Thief.png';
import Warrior from '../images/Clases/Warrior.png';
import Knight from '../images/Clases/Knight.png';
import Ranger from '../images/Clases/Ranger.png';

// Iconos de Elemntos
import Ice from '../images/Elemento/Ice.png';
import Fire from '../images/Elemento/Fire.png';
import Earth from '../images/Elemento/Earth.png';
import Light from '../images/Elemento/Light.png';
import Dark from '../images/Elemento/Dark.png';



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const images = importAll(require.context('../images/iconModel', false, /\.png$/));

export const HeroItem = ({nombre, elemento, clase, rareza,icon}) => {
    /*
    const imageName = `${nombre.replace(/\s/g, '-')}-icon.png`;
    const heroImage = images[imageName];*/
    
    let color;
    let ShadowColor;
    let BorderColor;
    let Hclase;
    let iconoElemento;
    let Rarity;

    switch (elemento) {
        case 'Ice':
            color = 'bg-cyan-500';
            ShadowColor = 'shadow-cyan-500'
            BorderColor = 'border-cyan-600'
            iconoElemento = Ice;
            break;
        case 'Fire':
            color = 'bg-red-800';
            ShadowColor = 'shadow-red-800'
            BorderColor = 'border-red-600'
            iconoElemento = Fire;
            break;
        case 'Earth':
            color = 'bg-green-700';
            ShadowColor = 'shadow-green-700'
            BorderColor = 'border-green-600'
            iconoElemento = Earth;
            break;
        case 'Dark':
            color = 'bg-fuchsia-800';
            ShadowColor = 'shadow-fuchsia-800 '
            BorderColor = 'border-fuchsia-600 '
            iconoElemento = Dark;
            break;
        case 'Light':
            color = 'bg-amber-400';
            ShadowColor = 'shadow-amber-400'
            BorderColor = 'border-amber-600 '
            iconoElemento = Light;
            break;
        default:
            color = 'bg-gray-500';
            ShadowColor = 'shadow-gray-500'
            BorderColor = 'border-gray-500'
            iconoElemento = Ice;
            break;
    };
    switch (clase) {
        case 'Mage':
            Hclase = Mage;
            break;
        case 'Soul Weaver':
            Hclase = Healer;
            break;
        case 'Thief':
            Hclase = Thief;
            break;
        case 'Warrior':
            Hclase = Warrior;
            break;
        case 'Knight':
            Hclase = Knight;
            break;
        default:
            Hclase = Ranger; 
            break;
    };
    switch (rareza) {
        case 3:
            Rarity = Star_3;
            break;
        case 4:
            Rarity = Star_4;
            break;
        case 5:
            Rarity = Star_5;
            break;
        default:
            Rarity = Star_3; 
            break;
    };

    const onClickHero = () =>{
        console.log("Click");
    }


    return (
        
            <a  onClick={onClickHero}  className='group' href={`/heros/${nombre}`}>
                <div className={` max-w-[400px] overflow-visible relative rounded-xl flex items-center gap-6   bg-gradient-to-r from-orange-800/85 via-orange-900/85 to-orange-950/85 hover:from-orange-800 hover:via-orange-900 hover:to-orange-950 highlight-white/5 shadow-xl  duration-75  border ${BorderColor}`}>

                    <div className='size-20 absolute -left-6 w-24 h-24 rounded-full shadow-lg group-hover:scale-105 transition z-20 '>

                        <img src={icon}   loading="lazy" alt="avatar"  className='absolute w-24 h-24 z-10 rounded-full ' />

                        <div className={`absolute rounded-full ${color} top-0 right-0 bottom-0 left-0 z-0  drop-shadow-lg `}></div>
                        <img src={Hclase}   alt=""    loading="lazy"    className='absolute size-7 -left-1 top-0 z-20 drop-shadow-md  transition'/> 
                        <img src={iconoElemento} alt="avatar" loading="lazy" className='absolute size-8 -right-2 -top-1 z-20 drop-shadow-md ' />         
                    </div>

                    <div className="flex flex-col py-5 pl-20 z-10 ">
                        <img src={Rarity} alt="" className=" h-5  w-20 drop-shadow-sm pointer-events-none" />
                        <h3 className="text-xl pointer-events-none">{nombre}</h3>
                    
                    </div>
                    
                    <button class=" absolute top-0 bottom-0 left-0 right-0 rounded-md group-hover:brightness-150 active:opacity-75 overflow-hidden">
                        <span class={`${color} ${ShadowColor}  absolute top-o bottom-0 -left-[150%] inline-flex w-[20px] h-80 rounded-md opacity-50 group-hover:left-[150%] duration-1000 shadow-[0_0_25px_20px_rgba(0,0,0,0.3)] z-0`}></span>
                    
                    </button>
                </div>
            </a>
        
        
    )
}
