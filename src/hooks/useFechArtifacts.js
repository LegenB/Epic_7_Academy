import { useEffect, useState } from 'react'
import { getArtifacts } from '../helper/getArtifacts';

export const useFetchArtifacts = () => {
    const [allArtifacts, setAllArtifacts] = useState([])
    const [originalArtifacts, setOriginalArtifacts] = useState([]); 
    const [rarityFilter, setRarityFilter] = useState(0);
    const [classFilter, setClassFilter] = useState('ALL');

    useEffect(() => {
        getArtifacts()
          .then(newArtifacts => {
            setAllArtifacts(newArtifacts);
            setOriginalArtifacts(newArtifacts); //Uso para filtros
          });
      }, []);

    //Use Effect para actualizar las variables de los filtros
    useEffect(() => {
        onGetFilters(rarityFilter, classFilter)
      }, [rarityFilter,classFilter])
  
    //Filtro por Rareza
    const onGetRarityFilter = ( Rarity ) =>{
    setRarityFilter(Rarity);
    }

    //Filtro por Clase
    const onGetClassFilter = (Class) =>{
    setClassFilter(Class);

    }

    // FILTRO POR NOMBRE
    const onGetNameFilter = (name) =>{
        const filteredArtifacts = originalArtifacts.filter(artifact => {
          return (artifact.name.toLowerCase().includes(name.toLowerCase()))
        });
        setAllArtifacts(filteredArtifacts);
      }



      // FILTRO TRIPLE 
      const onGetFilters = (rarity, clas) => {
        //console.log(' Rareza: ' +rarity + ' Clase: '+ clas +' Tipo: ' + element)
        if (rarity !== 0 && clas !== 'ALL') { // RAREZA + CLASE + TIPO
            const filteredArtifacts = originalArtifacts.filter(Artifacts => {
                return Artifacts.rarity === rarity && Artifacts.artifact_class === clas;
            });
            setAllArtifacts(filteredArtifacts);
        } 
        else if (rarity !== 0 && clas !== 'ALL' ){  // RAREZA + CLASE
            const filteredArtifacts = originalArtifacts.filter(Artifacts => {
                return Artifacts.rarity === rarity && Artifacts.artifact_class === clas;
            });
            setAllArtifacts(filteredArtifacts);
        } 
        else if (rarity !== 0 ) { // RAREZA + TIPO
            const filteredArtifacts = originalArtifacts.filter(Artifacts => {
                return Artifacts.rarity === rarity;
            });
            setAllArtifacts(filteredArtifacts);
        } 
        else if (clas !== 'ALL') { // TIPO + CLASE
            const filteredArtifacts = originalArtifacts.filter(Artifacts => {
                return Artifacts.artifact_class === clas;
            });
            setAllArtifacts(filteredArtifacts);
        } 
        else if (clas !== 'ALL') { // CLASE
          const filteredArtifacts = originalArtifacts.filter(Artifacts => {
              return Artifacts.artifact_class === clas;
          });
          setAllArtifacts(filteredArtifacts);
        } 
        else if (rarity !== 0) { // RAREZA
            const filteredArtifacts = originalArtifacts.filter(Artifacts => {
                return Artifacts.rarity === rarity;
            });
            setAllArtifacts(filteredArtifacts);
        } 
        else {
            setAllArtifacts(originalArtifacts);
        }}




      return{
        allArtifacts,
        onGetRarityFilter,
        onGetClassFilter,
        onGetNameFilter
    }



}