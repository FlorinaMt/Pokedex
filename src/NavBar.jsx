import { Link } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/pokemons">Poke-dex</Link>
        <Link to="/about">About poke-dex</Link>
      </nav>
    </>
  );
}
