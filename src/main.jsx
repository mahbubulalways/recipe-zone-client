import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Routes.jsx';
import ContextProvider from './Components/ContextProvider/ContextProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>  <RouterProvider router={router} /></ContextProvider>
    <ToastContainer />
  </React.StrictMode>,
)
