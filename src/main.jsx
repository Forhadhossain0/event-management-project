import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import Route from './components/route/Route';
import AuthProvider from './components/authprovider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

