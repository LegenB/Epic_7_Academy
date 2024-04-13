import React, { useState } from 'react'
import Star_3 from '../images/Star/3-star.png'
import Star_4 from '../images/Star/4-star.png'
import Star_5 from '../images/Star/5-star.png'

import Ice from '../images/Elemento/Ice.png';
import Fire from '../images/Elemento/Fire.png';
import Earth from '../images/Elemento/Earth.png';
import Light from '../images/Elemento/Light.png';
import Dark from '../images/Elemento/Dark.png';

import Mage from "../images/Clases/Mage.png";
import Healer from '../images/Clases/Soul Weaver.png';
import Thief from '../images/Clases/Thief.png';
import Warrior from '../images/Clases/Warrior.png';
import Knight from '../images/Clases/Knight.png';
import Ranger from '../images/Clases/Ranger.png';


export const HerosFilter = ({onElementFilter ,onRarityFilter,onClassFilter, onFilterName }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const [selectedRarity, setSelectedRarity] = useState(0); // Estado para rastrear la rareza seleccionada
    const [selectedElement, setSelectedElement] = useState('ALL'); // Estado para rastrear el elemento seleccionado
    const [selectedClass, setSelectedClass] = useState('ALL'); // Estado para rastrear el elemento seleccionado
    //Preparando para el filtro por elemento
    const onElement = (Elemento = '') =>{
        setSelectedElement(Elemento); // Estilos para los botones Elmentos
        switch (Elemento) {
            case 'Fire':
                onElementFilter(Elemento);
                break;
            case 'Ice':
                onElementFilter(Elemento);
                break;
            case 'Earth':
                onElementFilter(Elemento);
                break; 
            case 'Light':
                onElementFilter(Elemento);
                break;
            case 'Dark':
                onElementFilter(Elemento);
                break;  
            default:
                onElementFilter(Elemento);
                break;
        }
    };
    // Preparando para el filtro de Rareza
    const onRarity = (Rarity = 0) =>{
        setSelectedRarity(Rarity); // Estilos para botones Rareza
        switch (Rarity) {
            case 3:
            
                onRarityFilter(Rarity)
                break;
            case 4:
                
                onRarityFilter(Rarity)
                break;
            case 5:
             
                onRarityFilter(Rarity)
                break;
            default:
             
                onRarityFilter(Rarity)
                break;
        }
    };
    // Preparando para el filtro de clases
    const onClass = (Class = '') =>{
        setSelectedClass(Class); // Estilos para botones Clases
        switch (Class) {
            case 'Mage':           
                onClassFilter(Class)
                break;
            case 'Healer':               
                onClassFilter('Soul Weaver')
                break;
            case 'Thief':            
                onClassFilter(Class)
                break;
            case 'Warrior':           
                onClassFilter(Class)
                break;
            case 'Thief':           
                onClassFilter(Class)
                break;
            case 'Knight':           
                onClassFilter(Class)
                break;
            case 'Ranger':           
                onClassFilter(Class)
                break;
            default:
                onClassFilter(Class)
                break;
        }
    };
    // Filtro por nombre
    const handleKeyDown = (event) => {
       /* if (event.key === 'Enter') {
         
        }*/
        onFilterName(searchTerm);
    };




    return (

        <div className=' mt-5  mx-6'>  

            <div className='flex w-full space-x-5 mt-1'>
                <input type="text" className=' text-white rounded-xl border border-teal-500 px-2 md:px-4 py-1 bg-slate-700 w-3/6' 
                    placeholder="Search... " 
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={handleKeyDown}
                /> 
                
                <div className='grid grid-cols-4  w-3/6 bg-slate-800 '>
                    <button className={` text-center   ${selectedRarity === 0 ? 'border border-teal-500' : ''}`} onClick={() => onRarity(0)}>
                        ALL
                    </button>
                    <button className={` text-center   ${selectedRarity === 3 ? 'border border-teal-500' : ''}`} onClick={() => onRarity(3)} >
                        <img src={Star_3} alt="" />
                    </button>
                    <button className={` text-center   ${selectedRarity === 4 ? 'border border-teal-500' : ''}`} onClick={() => onRarity(4)}>
                        <img src={Star_4} alt="" />
                    </button>
                    <button className={` text-center   ${selectedRarity === 5 ? 'border border-teal-500' : ''}`} onClick={() => onRarity(5)}>
                        <img src={Star_5} alt="" />
                    </button>
                </div>
                
            </div>

            <div className='flex w-full space-x-5 mt-1'>
                <div className='grid grid-cols-6  w-3/6  bg-slate-800 '>
                        <button className={`text-center flex justify-center items-center ${selectedElement === 'ALL' ? 'border border-teal-500' : ''}`} onClick={() => onElement('ALL')}>
                            ALL
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedElement === 'Earth' ? 'border border-teal-500' : ''}`} onClick={() => onElement('Earth')}>
                            <img src={Earth} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedElement === 'Ice' ? 'border border-teal-500' : ''}`}  onClick={() => onElement('Ice')}>
                            <img src={Ice} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedElement === 'Fire' ? 'border border-teal-500' : ''}`} onClick={() => onElement('Fire')} >
                            <img src={Fire} alt="" className=' size-7'/>
                        </button>
                        <button  className={`text-center flex justify-center items-center ${selectedElement === 'Light' ? 'border border-teal-500' : ''}`} onClick={() => onElement('Light')} >
                            <img src={Light} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedElement === 'Dark' ? 'border border-teal-500' : ''}`} onClick={() => onElement('Dark')}>
                            <img src={Dark} alt="" className=' size-7'/>
                        </button>
                </div>
                <div className='grid grid-cols-7  w-3/6 bg-slate-800 '>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'ALL' ? 'border border-teal-500' : ''}`} onClick={() => onClass('ALL')}>
                            ALL
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Mage' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Mage')}>
                            <img src={Mage} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Healer' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Healer')}>
                            <img src={Healer} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Thief' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Thief')}>
                            <img src={Thief} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Warrior' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Warrior')}>
                            <img src={Warrior} alt="" className=' size-7'/>
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Knight' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Knight')}>
                            <img src={Knight} alt="" className=' size-7' />
                        </button>
                        <button className={`text-center flex justify-center items-center ${selectedClass === 'Ranger' ? 'border border-teal-500' : ''}`} onClick={() => onClass('Ranger')}>
                            <img src={Ranger} alt="" className=' size-7' />
                        </button>
                </div>  
            </div>
      </div>
    )
}
