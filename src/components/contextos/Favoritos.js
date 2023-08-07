import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = ({ children }) => {
    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};
export default FavoritosProvider;

export const useFavoritoContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favorito.some(
            (item) => item.id === novoFavorito.id
        );

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
         setFavorito(novaLista);
    };
    return {
        favorito,
        adicionarFavorito,
    };
};
