import React from "react";
import Footer from "../Components/Footer";
import Cotizacion from "../Components/Cotizacion";

class Cotizador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
      unidad: 0,
      total: 0,
      textarea : "Déjanos tu comentario aquí..."
    };
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log("Presionando el boton");
  };

  _handleOnChange = (cantidad) => {
    this.setState({
        cantidad,
        total: this.state.cantidad * this.state.unidad
    });
  };

  _handleOnChangeUnidad = (unidad) => {
    this.setState({
        unidad,
        total: this.state.cantidad * this.state.unidad
    });
  
  };

  __total = () => {
      this.setState({
          total: this.state.cantidad * this.state.unidad
      })
      console.log(this.state.total)
  }

  _handleOnChangeTextarea = (textarea) => {
    this.setState({
        textarea,
    });
  };
  

  render() {
    return (
      <>
        <Cotizacion 
        onSubmit={this._handleSubmit} 
        cantidad = {this.state.cantidad}
        unidad = {this.state.unidad}
        total = {this.state.total}
        textarea = {this.state.textarea}
        onChange = {this._handleOnChange}
        onChangeUnidad = {this._handleOnChangeUnidad}
        onChangeTotal = {this.__total}
        onChangeTextarea = {this._handleOnChangeTextarea}
        />
        <Footer />
      </>
    );
  }
}

export default Cotizador;
