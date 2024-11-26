import pokemonImage from "./PokemonImage";

function Pokemon({ details }) {
  if (!details) {
    return <p> No Pokémon selected</p>;
  }
  return (
    <div>
      <h3>{details.name}</h3>
      <img src={pokemonImage} alt={details.name} />
      <p>Height: {details.height} decimeters </p>
      <p>Weight: {details.weight} pounds</p>
      <p>Type: {" "} {/* join för att slå ihop alla types till strängar. */}
        {details.types.map((typeInfo) => typeInfo.type.name).join(", ")}
      </p>
    </div>
  );
}
export default Pokemon;
