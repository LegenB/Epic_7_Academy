import { HerosWelcome } from "../components/HerosWelcome";
import { ListArtifacts } from "../components/Artifacts/ListArtifacts"
import { useFetchArtifacts } from "../hooks/useFechArtifacts";
import { ArtifactsFilter } from "../components/Artifacts/ArtifactFilter";

export const Artifacts = () => {

  const { allArtifacts, onGetRarityFilter, onGetClassFilter, onGetNameFilter} = useFetchArtifacts(); 
  
  console.log(allArtifacts);

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
        <HerosWelcome title='Artifacts'/>

        <ArtifactsFilter onRarityFilter={onRarityFilter} onClassFilter={onClassFilter} onFilterName={onNameFilter} />

        <ListArtifacts Artifacts={ allArtifacts } />
    </>
    )
}
