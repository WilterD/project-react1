import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, UserCard } from "./Saludar";
import Product, { Navbar } from "./Product";



const root = ReactDOM.createRoot(document.getElementById("root")); // app incializada

root.render(
  <div>
    <UserCard
      saludo={function(){alert('hola')}}
      name="nombre"
      amount={3000}
      casado={true}
      puntos={[1, 2, 3, 4]}
      direccion={{ calle: "Calle", ciudad: "new york" }}
    />
  </div>
); // renderizar el componente en el DOM

// root.render(<h1>Hola Mundo</h1>); // renderizado de la app
