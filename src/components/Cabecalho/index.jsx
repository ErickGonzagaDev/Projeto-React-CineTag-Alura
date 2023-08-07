// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Cabecalho.module.css";

// ***********************************
// |        Import Imagens           |
// ***********************************

import logo from "./logo.png";

// ***********************************
// |    Import React-router-dom      |
// ***********************************

import { Link } from "react-router-dom";

// ***********************************
// |      Import Componentes         |
// ***********************************
import CabecalhoLink from "components/CabecalhoLink";

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag" />
            </Link>

            <nav>
                <CabecalhoLink url="./">Home </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos </CabecalhoLink>
        
            </nav>
        </header>
    );
};

export default Cabecalho;
