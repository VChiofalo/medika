import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/index.jsx';
import AccueilPage from './components/accueilpage/Accueilpage.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element:<AccueilPage/>},
      { path: "/home", element:<Home/>},
      { path: "/profil", element:<p>Profil</p>},
      { path: "/parametre", element:<p>Paramètres</p>},
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
