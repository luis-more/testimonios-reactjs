import React from "react";
import '../css/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src={require(`../img/uno-${props.imagen}.jpg`)}
        alt="foto enmma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo}<strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">{props.texto}</p>
      </div>
    </div>
  );
}

export default Testimonio;
