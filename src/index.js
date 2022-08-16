import PropTypes from "prop-types";
import React from "react";
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

root.render(
  <>
    {users.map((user, i) => {
      return <div key={i}>
      <h1 >{user.name}</h1>
      <img src={user.image} />
      </div>
    })}

    {/* <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
      }}
    >
      <h1>hola</h1>
      <button>enviar</button>
    </form>

    <Posts /> */}
  </>
); // renderizar el componente en el DOM

// root.render(<h1>Hola Mundo</h1>); // renderizado de la app
