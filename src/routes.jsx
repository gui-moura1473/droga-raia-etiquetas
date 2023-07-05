import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles/estilosGlobais.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Posologia from './paginas/Posologia'
import Inicio from './paginas/Inicio'

const AppRoutes = () => {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          <Route index element={<Inicio/>}/>
          <Route path='/posologia' element={<Posologia/>}/>
        </Routes>
        <Footer/>
        
    </BrowserRouter>
  )
}

export default AppRoutes