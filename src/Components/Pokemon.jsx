function Pokemon({ details }) {
  if (!details) {
    return <p> No Pokémon selected</p>;
  }
  return (
    <div>
      <h3>{details.name}</h3>
      <p>Height: {details.height} decimeters </p>
      <p>Weight: {details.weight} pounds</p>
    </div>
  );
}

export default Pokemon;
