import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")); // app incializada

function Saludar() {
  function sumar(a, b) {
    return a + b;
  }

  return <h1>{sumar(1, 2)}</h1>;
}

root.render(
  <div>
    <Saludar />
    <Saludar />
    <Saludar />
    <Saludar />
  </div>
); // renderizar el componente en el DOM

// root.render(<h1>Hola Mundo</h1>); // renderizado de la app
