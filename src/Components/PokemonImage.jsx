import React from "react";
import PokemonApplication from "./PokemonApplication";
import Pokemon from "./Pokemon";
import { useState, useEffect } from "react";

function PokemonJPG({ pokemonName }) {
    const [pokemonImage, setPokemonImage] = useState(null);
    const [isLoading, setIsloading] = useState(true);


    useEffect(() => {
        async function fetchPokemonImage() {
            try {
                setIsloading(true);
                const res = await fetch(´https://pokeapi.co/api/v2/pokemon/${pokemonName}´)
                const res = await res.json();
                const imageUrl = data.sprites.front_default;
            }
    }
        // Om jpg ändras, uppdatera bilden
        setPokemonImage(jpg);
    }, [jpg]); // Uppdatera om jpg ändras

    return (
        <>
            <div>
                <img src={pokemonImage} alt="Pokemon" />
            </div>
        </>
    );
}
/* setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/4.gif`); */

export default PokemonJPG