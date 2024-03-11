import { useEffect, useState } from 'react'
import {getHeros} from '../helper/getHeros';

export const useFetchHeros = () => {
    const [allHeros, setAllHeros] = useState([])
    //Para filtros
    const [originalHeros, setOriginalHeros] = useState([]); 
    const [elementFilter, setElementFilter] = useState('ALL');
    const [rarityFilter, setRarityFilter] = useState(0);
    const [classFilter, setClassFilter] = useState('ALL');

    useEffect(() => {
      getHeros()
        .then(newHeros => {
          setAllHeros(newHeros);
          setOriginalHeros(newHeros); //Uso para filtros
        });
    }, []);

    //Use Effect para actualizar las variables de los filtros
    useEffect(() => {
      onGetFilters(rarityFilter, classFilter, elementFilter)
    }, [elementFilter,rarityFilter,classFilter])

    //Filtro por elementos
    const onGetElementFilter = (type) => {
      setElementFilter(type);
    }
    //Filtro por Rareza
    const onGetRarityFilter = (Rarity ) =>{
      setRarityFilter(Rarity);
    }
  
    //Filtro por Clase
    const onGetClassFilter = (Class) =>{
      setClassFilter(Class);

    }
    
    // FILTRO TRIPLE 
    const onGetFilters = (rarity, clas, type) => {
      //console.log(' Rareza: ' +rarity + ' Clase: '+ clas +' Tipo: ' + type)
      if (rarity !== 0 && clas !== 'ALL' && type !== 'ALL') { // RAREZA + CLASE + TIPO
          const filteredHeros = originalHeros.filter(hero => {
              return hero.rarity === rarity && hero.clas === clas && hero.type === type;
          });
          setAllHeros(filteredHeros);
      } 
      else if (rarity !== 0 && clas !== 'ALL' ){  // RAREZA + CLASE
          const filteredHeros = originalHeros.filter(hero => {
              return hero.rarity === rarity && hero.clas === clas;
          });
          setAllHeros(filteredHeros);
      } 
      else if (rarity !== 0 && type !== 'ALL') { // RAREZA + TIPO
          const filteredHeros = originalHeros.filter(hero => {
              return hero.rarity === rarity && hero.type === type;
          });
          setAllHeros(filteredHeros);
      } 
      else if (type !== 'ALL' && clas !== 'ALL') { // TIPO + CLASE
          const filteredHeros = originalHeros.filter(hero => {
              return hero.type === type && hero.clas === clas;
          });
          setAllHeros(filteredHeros);
      } 
      else if (type !== 'ALL') { //TIPO
          const filteredHeros = originalHeros.filter(hero => {
              return hero.type === type;
          });
          setAllHeros(filteredHeros);
      } 
      else if (clas !== 'ALL') { // CLASE
        const filteredHeros = originalHeros.filter(hero => {
            return hero.clas === clas;
        });
        setAllHeros(filteredHeros);
      } 
      else if (rarity !== 0) { // RAREZA
          const filteredHeros = originalHeros.filter(hero => {
              return hero.rarity === rarity;
          });
          setAllHeros(filteredHeros);
      } 
      else {
          setAllHeros(originalHeros);
      }}
  
    
    // FILTRO POR NOMBRE
    const onGetNameFilter = (name) =>{
      const filteredHeros = originalHeros.filter(hero => {
        return (hero.name.toLowerCase().includes(name.toLowerCase()))
      });
      setAllHeros(filteredHeros);
    }
    return{
        allHeros,
        onGetRarityFilter,
        onGetClassFilter,
        onGetElementFilter,
        onGetNameFilter
    }

}