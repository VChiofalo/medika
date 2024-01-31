import AnimalCard from './components/animal_card'
import WeightStatusCard from './components/weight_status_card'
import VaccineCard from './components/vaccine_card'
import SupervisionCard from './components/supervision_card'

function ProfilPageAnimal() {
    
    return <>
        <AnimalCard/>
        <div className='flex justify-center'>
            <WeightStatusCard/>
            <VaccineCard/>
        </div>
      
        <SupervisionCard/> 
    </>
  }
  export default ProfilPageAnimal;