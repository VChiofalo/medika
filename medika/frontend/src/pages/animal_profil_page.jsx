    import AnimalCard from '../components/cards/animal_card'
    import SupervisionCard from '../components/cards/supervision_card'
import useLogged from '../hooks/useLogged'

function ProfilPageAnimal() {

    useLogged()
    
    return <>
        <AnimalCard/>
      
        <SupervisionCard/> 
    </>
  }
  export default ProfilPageAnimal;