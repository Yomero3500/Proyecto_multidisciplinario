import React from 'react';
import '../styles/MenuDigital.css'

class MenuCard extends React.Component {
  mostrarAlerta = () => {
    const { nombre, descripcion, precio } = this.props;

    const mensaje = `Nombre: ${nombre}\nDescripción: ${descripcion}\nPrecio: ${precio}`;
    alert(mensaje);
  }

  render() {
    const { imagen, nombre, descripcion, precio } = this.props;

    return (
      <div className="menu-card">
        <img src={imagen} alt={`Imagen de ${nombre}`} />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: {precio}</p>
        <button onClick={this.mostrarAlerta}>Comprar</button>
      </div>
    );
  }
}

export default MenuCard;
