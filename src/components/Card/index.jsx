// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Card.module.css";

// ***********************************
// |         Import Imagens          |
// ***********************************

import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { useFavoritoContext } from "components/contextos/Favoritos";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to = {`/${id}`}>
                <img className={styles.capa} src={capa} alt={titulo} />
                <h2>{titulo}</h2>
            </Link>
            <img
                className={styles.favoritar}
                src={icone}
                alt="Favoritar filme"
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa });
                }}
            />
        </div>
    );
};

export default Card;
