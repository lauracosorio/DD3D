import React from "react";
import "./Styles/Main.css"
import David from "../imagenes/unnamed.jpg";

function Carlos() {
  return (
    <div className="main__description">
      <div className="main__description--image">
      <img  className="image" src={David} alt="Carlos David Pérez" />
      </div>
      <div className="main__description--info">
        <div className="main__description--title">
          <h2>Hola, soy Carlos David Pérez</h2>
          <small>Y SOY DISEÑADOR GRÁFICO</small>
          <hr />
          
        </div>
        <div className="main__description--paragraph">
          <p>
            ¡Hola! Si estás aquí, es porque quieres saber un poco más sobre mí,
            por eso, te voy a contar un poco quién soy, a qué me dedico, y cómo
            te puedo ayudar.
          </p>
          <p>
            Nací en Barcelona capital, aunque he vivido toda la vida fuera pero
            muy cerca de ella. Me gusta tener la ciudad cerca, pero prefiero los
            sitios más tranquilos para vivir.
          </p>
          <p>
            Como no sabía muy bien qué estudiar, cuando llegó la hora de
            decidir, me puse a estudiar informática, porque era lo que más me
            llamaba la atención en aquel momento.
          </p>
          <p>
            Eso me llevó a trabajar como informático algunos años, cosa que me
            hizo darme cuenta de que no me gustaba lo que hacía, ni me veía toda
            la vida intentando arreglar los marrones de los demás.
          </p>
          <p>
            Por ese motivo, desde que perdí mi último trabajo, no envié ningún
            curriculum más y decidí dedicarme a algo que realmente me gustara.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carlos;
