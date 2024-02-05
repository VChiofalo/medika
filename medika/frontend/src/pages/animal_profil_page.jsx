    import AnimalCard from '../components/animal_card'
    import SupervisionCard from '../components/supervision_card'
import useLogged from '../hooks/useLogged'

function ProfilPageAnimal() {

    useLogged()
    
    return <>
        <AnimalCard/>
      
        <SupervisionCard/> 
    </>
  }
  export default ProfilPageAnimal;