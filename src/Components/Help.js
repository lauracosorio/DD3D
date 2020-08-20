import React from "react";
import { data } from "../utils/mocks/data";

function Help(params) {
  return (
    <div className="ayuda">
      <h2>¿Cómo puedo ayudarte?</h2>
      <div className="card-list">
        {data.Help.map((item, index) => {
          return (
            <div className="card" key={`main-card-${index}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default Help;
