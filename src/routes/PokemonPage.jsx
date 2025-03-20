import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../css/PokemonPage.css";

export default function PokemonPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [experience, setExperience] = useState(0);
  const [abilities, setAbilities] = useState([]);
  const [id, setId] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState(null);

  const backClicked = () => {
    console.log("Navigating back with offset:", location.state?.offset);
    navigate("/pokemons", { state: { offset: location.state?.offset || 0 } });
  };

  useEffect(() => {
    console.log(
      "Card clicked, navigating with offset:",
      location.state?.offset
    );
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setAbilities(data.abilities.map((ability) => ability.ability));
        setWeight(data.weight);
        setId(data.id);
        setHeight(data.height);
        setExperience(data.base_experience);
        setImage(data.sprites.front_default);
      });
  }, [name]);

  return (
    <div className="pokemon-container">
      <button onClick={backClicked}>Back</button>
      <h1>{name}</h1>
      <div className="pokemon-card">
        <img src={image} alt={name} />
        <h3>#{id}</h3>
        <h3>Height: {height}</h3>
        <h3>Weight: {weight}</h3>
        <h3>XP: {experience}</h3>

        <h3>Abilities:</h3>
        <ul>
          {abilities.map((a) => (
            <li key={a.url}>{a.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
