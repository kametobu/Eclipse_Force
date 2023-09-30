import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";

import Home from './pages/home';


function Rotas() {
    return (
        
    <BrowserRouter>
      <Home />
    </BrowserRouter>

    )
}


export default Rotas;
