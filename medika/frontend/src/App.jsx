import { useState } from 'react'
import './App.css'

import ProfilPageAnimal from './pages/animal_profil_page'
import AnimalWeightPage from './pages/animal_weight_page'
import ChartGraph from './components/chart'
import UserProfilPage from './pages/user_profil_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfilPageAnimal/>

      <AnimalWeightPage/>

      <UserProfilPage/>
    </>
  )
}

export default App
