import { useState } from 'react'
import './App.css'
import AnimalCard from './components/animal_card'
import WeightCard from './components/weight_card'
import VaccineCard from './components/vaccine_card'
import Navbar from './components/navbar'
import SupervisionCard from './components/supervision_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimalCard/>
      <div className='flex justify-center'>
        <WeightCard/>
        <VaccineCard/>
      </div>
      
      <SupervisionCard/>

      <Navbar/>

    </>
  )
}

export default App
