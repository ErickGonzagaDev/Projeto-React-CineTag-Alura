// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Favoritos.module.css";

// ***********************************
// |       Import Componentes        |
// ***********************************

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritoContext } from "components/contextos/Favoritos";

const Favoritos = () => {

    const {favorito} = useFavoritoContext()
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <section className={styles.container}>
                {favorito.map((fav)=>{
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    );
};

export default Favoritos;
