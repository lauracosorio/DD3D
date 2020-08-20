import React from "react";
import "./Styles/Employees.css";

function Employees(props) {
  const { Employees } = props;
  return (
    <div className="employees">
        <table>
      <tr className="tableTitle">
        <td>Empleado</td>
        <td>Edad</td>
        <td>Teléfono</td>
        <td>Correo</td>
      </tr>
      {Employees.map((item, index) => {
        return item.type === "one" ? (
          <tr key={`employees-${index}`}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
          </tr>
        ) : (
          <tr className="one" key={`employees-${index}`}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
          </tr>
        );
      })}
    </table>
    </div>
  );
}

export default Employees;
