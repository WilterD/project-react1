import PropTypes from 'prop-types';

export function Boton({text}) {
  return <button>
    <h1>{text}</h1>
    </button>;
}

Boton.prototype = {
    text: PropTypes.string.isRequired
}