import React from "react";
import "./Styles/Cotizador.css";

class Cotizacion extends React.Component {
  //   const { onSubmit, cantidad, unidad, onChangeCantidad } = props;

  _handleOnChange = (e) => {
    this.props.onChange(e.target.value);
    console.log(e.target.value);
  };

  _handleOnChangeUnidad = (e) => {
    this.props.onChangeUnidad(e.target.value);
    console.log(e.target.value);
  };

  _total = (e) =>{
     this.onChangeTotal(e.target.value)
  }

  _handleOnChangeTextarea = (e) => {
    this.props.onChangeTextarea(e.target.value);
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="cotizador">
        <p>
          Realice una cotización de un pedido, con el valor unitario que usted
          concidere conveniente
        </p>
        <div className="container">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group row">
              <label htmlFor="cantidad" className="col-sm-6 col-form-label ">
                Cantidad
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  name="cantidad"
                  value={this.props.cantidad}
                  onChange={this._handleOnChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="unidad" className="col-sm-6 col-form-label">
                Valor Unitario
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  name="unidad"
                  value={this.props.unidad}
                  onChange={this._handleOnChangeUnidad}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="total" className="col-sm-6 col-form-label">
                Valor total
              </label>
              <div className="col-sm-3">
              <input
                  type="number"
                  className="form-control"
                  readOnly
                  name="unidad"
                  value={this.props.total}
                  onChange={this._handleOnChangeUnidad}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="descripcion" className="col-sm-6 col-form-label">
                Descripción del pedido
              </label>
              <div className="col-sm-3">
                <textarea
                type = "text"
                  className="form-control"
                  name="textarea"
                  value = {this.props.textarea}
                  onChange = {this._handleOnChangeTextarea}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
