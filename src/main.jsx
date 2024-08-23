import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './componets/home.jsx';
import Service from './componets/service.jsx';
import ServicePage from './componets/SinglePage/servicePage.jsx';
import About from './componets/aboutus.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/service/servicePage' element={<ServicePage/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router={router}/>
    </ThemeProvider>
   
  </StrictMode>,
)
