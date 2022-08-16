import PropTypes from 'prop-types';

export function Boton({text}) {
  return <div><button onClick={function(){
    console.log("escribiendo");
  }}>
    <h1>{text}</h1>
    </button>
    <input onChange={miFuncion} ></input>
    </div>;
}

Boton.prototype = {
    text: PropTypes.string.isRequired
}