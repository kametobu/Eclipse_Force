import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from './components/menu/menu';
import Home from './pages/home';
import Solar from './pages/solar';
import Time from './pages/time';
import Lunar from './pages/lunar';

function Rotas() {
  return (
    <>

      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route
            path=""
            element={<Home />}
          />
          <Route
            path="Home"
            element={<Home />}
          />
          <Route
            path="Solar"
            element={<Solar />}
          />
          <Route
            path="Lunar"
            element={<Lunar />}
          />
          <Route
            path="Time"
            element={<Time />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default Rotas;
