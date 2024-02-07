import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import Home from './pages/home.jsx';
import AccueilPage from './pages/accueil_page.jsx';
import UserProfilPage from './pages/user_profil_page.jsx';
import LoginPage from './pages/login_page.jsx'
import SignupForm from './pages/signup_form.jsx'
import AnimalWeightPage from './pages/animal_weight_page.jsx'
import FormAddAnimals from './components/forms/add_animals/index.jsx'
import store from './store/store.js';
import AnimalGallery from './components/animal_gallery/index.jsx';
import ProfilPageAnimal from './pages/animal_profil_page.jsx';
import Parameter from './pages/parametres.jsx';
import LogoutPage from './pages/logoutPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/logout", element:<LogoutPage/>},
      { path: "/", element:<AccueilPage/>},
      { path: "/home", element:<AnimalGallery/>},
      { path: "/animal_profil_page", element:<ProfilPageAnimal/>},
      { path: "/profil", element:<UserProfilPage/>},
      { path: "/poid", element:<AnimalWeightPage/>},
      { path: "/parametre", element:<Parameter/>},
      { path: "/login", element:<LoginPage/>},
      { path: "/register", element:<SignupForm/>},
      { path: "/add_animals", element:<FormAddAnimals/>},

    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
   
)
