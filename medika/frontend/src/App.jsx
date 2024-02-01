import { useState } from 'react'
import './App.css'

import ProfilPageAnimal from './pages/animal_profil_page'
import AnimalWeightPage from './pages/animal_weight_page'
<<<<<<< HEAD
import ChartGraph from './components/chart'
import UserProfilPage from './pages/user_profil_page'
=======


>>>>>>> 870b8c3bb5b671fd9ea6b063a7c288e42e5cbbf8

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfilPageAnimal/>

      <AnimalWeightPage/>
<<<<<<< HEAD

      <UserProfilPage/>
=======
>>>>>>> 870b8c3bb5b671fd9ea6b063a7c288e42e5cbbf8
    </>
  )
}

export default App
