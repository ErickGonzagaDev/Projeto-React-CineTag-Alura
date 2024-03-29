// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";
import ReactDOM from "react-dom/client";

// ***********************************
// |          Import Css             |
// ***********************************

import "./index.css";

// ***********************************
// |       Import Componentes        |
// ***********************************

import AppRoutes from "routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);
