// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./CabecalhoLink.module.css";

// ***********************************
// |     Import React-router-dom     |
// ***********************************
import { Link } from "react-router-dom";

const CabecalhoLink = ({ url, children }) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    );
};

export default CabecalhoLink;
