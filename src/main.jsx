import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apparouter from './App.jsx'
import {RouterProvider} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Apparouter}/> 
  </StrictMode>
)
