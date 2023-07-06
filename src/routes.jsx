import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import React, { useContext } from 'react'
import './styles/estilosGlobais.css'

import Posologia from './paginas/Posologia'
import Inicio from './paginas/Inicio'
import Login from './paginas/Login'
import DefaultPageLayout from './DefaultPageLayout'
import { AuthProvider, AuthContext } from './contexts/AuthContext'

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    if(!authenticated) {
      return <Navigate to="/" />;
    }

    return children;

  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            index
            element={<Login />}
          />
          <Route
            path='/inicio'
            element={<Private><DefaultPageLayout><Inicio /></DefaultPageLayout></Private>}
          />
          <Route
            path='/posologia'
            element={<Private><DefaultPageLayout><Posologia /></DefaultPageLayout></Private>}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes