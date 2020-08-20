import React from "react";

function Profession(props) {
  const { profession } = props;

  return profession.map((item, index) => {
    return (
      <div key={`main-profession-${index}`} className="main__profession">
        <div className="main__profession--title">
          <h2>{item.title}</h2>
          <hr />
        </div>
        <div className="main__profession--paragraph">
          <p>{item.p1}</p>
          <p>{item.p2}</p>
          <p>{item.p3}</p>
        </div>
      </div>
    );
  });
}
export default Profession;
