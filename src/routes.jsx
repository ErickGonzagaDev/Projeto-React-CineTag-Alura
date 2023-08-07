// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |     Import React-router-dom     |
// ***********************************

import { BrowserRouter, Route, Routes } from "react-router-dom";

// ***********************************
// |      Import Componentes          |
// ***********************************


import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
