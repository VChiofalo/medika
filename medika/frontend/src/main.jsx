import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/home/index.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element:<Home/>}

    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
