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
    <div className="pokeButtons">
      <h1 id="header"></h1>
      <button className="startExBtn" style={{ display: "flex", alignItems: "center", justifyContent: "center"}} onClick={toggleAPI}>
        {!startPokemon ? "Start Pokémon APP" : "Exit Pokémon app"}
      </button>
      </div>
      {startPokemon && <PokemonApplication />}
    </>
  );
}

export default App;
