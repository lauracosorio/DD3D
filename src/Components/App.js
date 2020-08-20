import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CEO from "../Pages/CEO";
import Empresa from "../Pages/Company";
import Cotizador from "../Pages/Cotizador";
import Layout from "./Layout";
// import Layout from "./Layout";
// import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={CEO} />
          <Route exact path="/CEO" component={CEO} />
          <Route exact path="/Nuestra-Empresa" component={Empresa} />
          <Route exact path="/Cotizador" component={Cotizador} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
