import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import Home from './components/home/index.jsx';
import AccueilPage from './components/accueilpage/Accueilpage.jsx';
import UserProfilPage from './pages/user_profil_page.jsx';
import LoginPage from './components/forms/LoginPage.jsx';
import SignupForm from './components/forms/SignupForm.jsx';

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
