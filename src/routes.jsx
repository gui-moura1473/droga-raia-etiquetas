import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./styles/estilosGlobais.css";

import Posologia from "./paginas/Posologia";
import Inicio from "./paginas/Inicio";
import Login from "./paginas/Login";
import DefaultPageLayout from "./DefaultPageLayout";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import Servicos from "./paginas/Servicos";
import Farmapop from "./paginas/Farmapop";
import Tutorial from "./paginas/Tutorial";
import Encomendas from "./paginas/Encomendas";
import PainelControle from "./paginas/Tutorial/PainelControle";
import ConfigImpressora from "./paginas/Tutorial/ConfigImpressora";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <Private>
                <DefaultPageLayout>
                  <Inicio />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/posologia"
            element={
              <Private>
                <DefaultPageLayout>
                  <Posologia />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/servicos"
            element={
              <Private>
                <DefaultPageLayout>
                  <Servicos />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/encomendas"
            element={
              <Private>
                <DefaultPageLayout>
                  <Encomendas />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/farmapop"
            element={
              <Private>
                <DefaultPageLayout>
                  <Farmapop />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/tutorial"
            element={
              <Private>
                <DefaultPageLayout>
                  <Tutorial />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/tutorial/painelcontrole"
            element={
              <Private>
                <DefaultPageLayout>
                  <PainelControle />
                </DefaultPageLayout>
              </Private>
            }
          />
          <Route
            path="/tutorial/configimpressora"
            element={
              <Private>
                <DefaultPageLayout>
                  <ConfigImpressora />
                </DefaultPageLayout>
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
