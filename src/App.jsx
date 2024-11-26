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
      <button className="startExBtn" onClick={toggleAPI}>
        {!startPokemon ? "Start Pokémon APP" : "Exit Pokémon app"}
      </button>
      {startPokemon && <PokemonApplication />}
    </>
  );
}

export default App;
