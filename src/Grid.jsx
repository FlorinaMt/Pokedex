import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Grid.css";
export function Grid({ pokemons, offset }) {
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const card = await Promise.all(
        pokemons.map(async (p) => {
          const info = await (await fetch(p.url)).json();
          return {
            id: info.id,
            name: info.name,
            image: info.sprites.front_default,
          };
        })
      );
      setPokemonCards(card);
    };
    getInfo();
  }, [pokemons]);

  return (
    <div className="grid-container">
      {pokemonCards.length > 0 ? (
        pokemonCards.map((p) => (
          <Link key={p.name} to={`/pokemons/${p.name}`} state={{ offset }}>
            <div className="card">
              <img src={p.image} alt={p.name} />
              <h3>#{p.id}</h3>
              <h3>{p.name}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
