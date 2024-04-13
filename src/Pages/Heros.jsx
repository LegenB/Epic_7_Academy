
import { ListHeros } from "../components/ListHeros";
import { HerosWelcome } from "../components/HerosWelcome";
import { HerosFilter } from "../components/HerosFilter";
import { useFetchHeros } from "../hooks/useFetchHeros";




export const Heros = () => {

  console.log("Funcion Hero")
  const { allHeros, onGetRarityFilter, onGetClassFilter, onGetElementFilter,onGetNameFilter} = useFetchHeros(); 
  
  const onElementFilter =(element = '') =>{
    onGetElementFilter(element);
  }

  const onClassFilter = (Class = '') =>{
    onGetClassFilter(Class);
  }

  const onRarityFilter = (Rarity = 0) =>{

    onGetRarityFilter(Rarity);
  }
  const onNameFilter = (name) =>{
    onGetNameFilter(name);
  }

  
  return (
  <>

    <div className=' relative bg-space bg-no-repeat bg-cover h-full bg-fixed'>
      
      <HerosWelcome/>
    
      <HerosFilter  onElementFilter={onElementFilter} onRarityFilter={onRarityFilter} onClassFilter={onClassFilter} onFilterName={onNameFilter}/>
      
      <ListHeros Heroes={allHeros}/>
    
    
    </div>

 

  </>
  )
}
