export function Saludar({ title, name = "user" }) {
  return (
    <h1>
      {title}, {name}
    </h1>
  );
}

export function UserCard({ saludo, name, amount, casado, puntos, direccion }) {
  console.log(saludo);
  return (
    <div>
      <h1>{name}</h1> 
      <h1>{amount}</h1>
      <h1>{casado ? "casado" : "soltero"}</h1>
    </div>
  );
}
