import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/index.jsx';
import AccueilPage from './components/accueilpage/Accueilpage.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import UserProfilPage from './pages/user_profil_page.jsx';
import LoginPage from './components/forms/LoginPage.jsx';
import SignupForm from './components/forms/SignupForm.jsx';
// import FormAddAnimals from './components/forms/add_animals/index.jsx';  

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element:<AccueilPage/>},
      { path: "/home", element:<Home/>},
      { path: "/profil", element:<UserProfilPage/>},
      { path: "/parametre", element:<p>Paramètres</p>},
      { path: "/login", element:<LoginPage/>},
      { path: "/register", element:<SignupForm/>},
      // { path: "/add_animals", element:<FormAddAnimals/>},

    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
