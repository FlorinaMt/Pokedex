import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from "./../Grid";
import Pagination from "./../Pagination";

export default function PokedexPage() {
  const [pokemons, setPokemons] = useState({ results: [] });
  const [count, setCount] = useState(0);
  const elementsPerPage = 25;
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const nextClicked = () => {
    if (offset + elementsPerPage < count) {
      const nextOffset = offset + elementsPerPage;
      console.log("Next clicked: ", nextOffset);
      setOffset(nextOffset);
      navigate("/pokemons", { state: { offset: nextOffset } });
    }
  };
  const prevClicked = () => {
    if (offset > 0) {
      const prevOffset = offset - elementsPerPage;
      console.log("Prev clicked: ", prevOffset);
      setOffset(prevOffset);
      navigate("/pokemons", { state: { offset: prevOffset } });
    }
  };

  useEffect(() => {
    const currOffset = location.state?.offset ?? 0;
    setOffset(currOffset);
    console.log("Offset = ", currOffset);
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${elementsPerPage}&offset=${currOffset}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setCount(data.count);
      });
  }, [location.state?.offset]);

  return (
    <div>
      <h1>Pokemons</h1>
      <Pagination
        nextClicked={nextClicked}
        isNextDisabled={offset + elementsPerPage >= count}
        isPrevDisabled={offset === 0}
        prevClicked={prevClicked}
      ></Pagination>
      <Grid pokemons={pokemons.results} offset={offset}></Grid>
      {/* Just so that we don't have to scroll back at the top of the page*/}
      <Pagination
        nextClicked={nextClicked}
        isNextDisabled={offset + elementsPerPage >= count}
        isPrevDisabled={offset === 0}
        prevClicked={prevClicked}
      ></Pagination>
    </div>
  );
}
