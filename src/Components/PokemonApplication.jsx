//här ska alla pokemons visas sen när api:t körs
import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

 
  //var tvungen att sätta select utanför, annars loopade den igenom varje pokemon och satte en dropdown på varje pokemon.
  return (
    <>
      <h2>Select a Pokémon</h2>
      <select onChange={(e) => setSelectedPokemon(e.target.value)}>
        <option value="">Choose a Pokémon</option>
        {pokemons.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

     {selectedPokemon && <Pokemon pokemonName={selectedPokemon} />}
    </>
  );
}

export default PokemonApplication;
