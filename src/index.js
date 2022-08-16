import PropTypes from "prop-types";
import React,{useState} from "react";
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

function Contador(){
  const [contador, setContador] = useState(0); // estado
  return(
    <>
      <h1>
    Contador: {contador}
  </h1>
  <button onClick={() => {
    setContador(contador+1);
  }}>sumar</button>

  <button onClick={() => {
    setContador(contador-1);
  }}>
  Restar
  </button>
    </>
  )
}

root.render(
  <>
  <Contador/>
    </>
); // renderizar el componente en el DOM