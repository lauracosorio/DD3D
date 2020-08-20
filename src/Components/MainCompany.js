import React from "react";

import { data } from "../utils/mocks/data";

import Carlos from "./Carlos";
import Profession from "./Profession";
import Employees from "./Employees";

function MainCompany() {
  return (
    <>
      <Carlos data={data.QuienesSomos} />
      <Profession profession={data.Team} />
      <Employees Employees={data.Employees} />
    </>
  );
}

export default MainCompany;
