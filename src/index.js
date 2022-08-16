import PropTypes from 'prop-types';
import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, UserCard } from "./Saludar";
import Product, { Navbar } from "./Product";

import {Boton} from "./Boton";
import {TaskCard} from "./Task";


const root = ReactDOM.createRoot(document.getElementById("root")); // app incializada

root.render(
  <div>
    <TaskCard ready={true}/>
  </div>
); // renderizar el componente en el DOM

// root.render(<h1>Hola Mundo</h1>); // renderizado de la app
