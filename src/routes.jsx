import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import './styles/estilosGlobais.css'

import Posologia from './paginas/Posologia'
import Inicio from './paginas/Inicio'
import Login from './paginas/Login'
import DefaultPageLayout from './DefaultPageLayout'
import { AuthProvider, AuthContext } from './contexts/AuthContext'
import Servicos from './paginas/Servicos'

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    
    if (loading) {
      return <div className="loading">Carregando</div>;
    }

    if(!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            index
            element={<Private><DefaultPageLayout><Inicio /></DefaultPageLayout></Private>}
          />
          <Route
            path='/posologia'
            element={<Private><DefaultPageLayout><Posologia /></DefaultPageLayout></Private>}
          />
          <Route
            path='/servicos'
            element={<Private><DefaultPageLayout><Servicos/></DefaultPageLayout></Private>}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes