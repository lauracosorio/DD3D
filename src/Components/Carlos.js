import React from "react";
import "./Styles/Main.css";

function Carlos(props) {
  const { data } = props;

  return data.map((item, index) => {
    return (
      <div key={`description-${index}`} className="main__description">
        <div className="main__description--image">
          <img className="image" src={item.image} alt="Carlos David Pérez" />
        </div>
        <div className="main__description--info">
          <div className="main__description--title">
            <h2>{item.title}</h2>
            <small>{item.subtitle}</small>
            <hr />
          </div>
          <div className="main__description--paragraph">
            <p>{item.p1}</p>
            <p>{item.p2}</p>
            <p>{item.p3}</p>
            <p>{item.p4}</p>
            <p>{item.p5}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default Carlos;
