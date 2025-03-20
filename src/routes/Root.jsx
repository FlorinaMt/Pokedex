import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./../NavBar";

export default function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {location.pathname === "/" && (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "50px auto",
        }}
      >
        <img
          src="assets/homeMeme.png"
          alt="Tired Pika Pika Pikachu"
        />
        </div>
      )}
      <Outlet />
    </>
  );
}
