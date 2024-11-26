import React, { useState, useEffect } from "react";

function PokemonJPG({ pokemonName }) {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pokemonName) return; // Kontrollera att pokemonName finns

    async function fetchPokemonImage() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = await res.json();
        const imageUrl = data.sprites.front_default;
        setPokemonImage(imageUrl);
      } catch (error) {
        console.error("Error fetching Pokémon image:", error);
        setPokemonImage(null); // Återställ om det blir fel
      } finally {
        setIsLoading(false); // Körs alltid
      }
    }

    fetchPokemonImage();
  }, [pokemonName]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : pokemonImage ? (
        <img src={pokemonImage} alt={`${pokemonName} sprite`} />
      ) : (
        <p>Could not load Pokémon image</p>
      )}
    </div>
  );
}

export default PokemonJPG;
