import { useState, useEffect } from "react";
import PokemonJPG from "./PokemonImage";

function Pokemon({ pokemonName }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setError(null);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!res.ok) throw new Error("Failed to fetch Pokémon details");
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchDetails();
  }, [pokemonName]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!details) return <p>Loading details...</p>;

  return (
    <div>
      <h3>{details.name}</h3>
      <PokemonJPG pokemonName={pokemonName} />
      <p>Height: {details.height} decimeters</p>
      <p>Weight: {details.weight} pounds</p>
      <p>Type: {details.types.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
    </div>
  );
}

export default Pokemon;
