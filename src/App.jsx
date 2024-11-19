import "./App.css";
import { useState } from "react";
import PokemonApplication from "./Components/PokemonApplication";

function App() {
  let [startPokemon, setStartPokemon] = useState(false);

  let toggleAPI = () => {
    setStartPokemon(!startPokemon);
  };

  return (
    <>
      <h1 id="header"> Pokemon application</h1>
      <p> Here there will be some pokemons</p>
      <button onClick={toggleAPI}>
        {!startPokemon ? "Start Pokémon APP" : "Exit Pokémon app"}
      </button>
      {startPokemon && <PokemonApplication />}
    </>
  );
}

export default App;
