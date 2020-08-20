import React from "react";
import { data } from "../utils/mocks/data";
import "./Styles/Main.css";

function Tools(params) {
  // const table = {
  //   backgroundColor: "gray",
  //   display: "block",
  //   width: "100%"
  // }
  return (
    <div className="tools">
      <h2>Herramientas de mi dominio</h2>
      <div className="tools-list">
        {data.Tools.map((item, index) => {
          return (
            <div border={0} className="tool" key={`main-tools-${index}`}>
              <small>{item.title}</small>

              <img className="corel" src={item.image} alt={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
