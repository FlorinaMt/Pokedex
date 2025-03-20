import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PokedexPage from "./routes/PokedexPage.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import Root from "./routes/Root.jsx";
import PokemonPage from "./routes/PokemonPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/pokemons",
        element: <PokedexPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/pokemons/:name",
        element: <PokemonPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
