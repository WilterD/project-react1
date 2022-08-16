import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { Saludar, UserCard } from "./Saludar";
import Product, { Navbar } from "./Product";

import { Boton } from "./Boton";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root")); // app incializada

const users = [
  {
    id: 1,
    name: "Juan",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Wilter",
    image: "https://robohash.org/user2",
  },
];

function Contador() {


useEffect(() => {
  console.log("render")
}, [])

  const [mensaje, setMensaje] = useState(""); // estado
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          setMensaje("");
          alert(mensaje);
        }}
      >
        borrar mensaje
      </button>
      <br />
      {mensaje}
    </div>
  );
}

root.render(
  <>
    <Contador />
  </>
); // renderizar el componente en el DOM
