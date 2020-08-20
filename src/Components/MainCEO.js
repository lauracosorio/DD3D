import React from "react";

import Carlos from "./Carlos";
import Profession from "./Profession";
import Help from "./Help";
import Tools from "./Tools";
import { data } from "../utils/mocks/data";


function Main() {
  return (
    <main>
      <Carlos data = {data.MainCEO} />
      <Profession profession = {data.Profession} />
      <Help />
      <Tools />
    </main>
  );
}

export default Main;
