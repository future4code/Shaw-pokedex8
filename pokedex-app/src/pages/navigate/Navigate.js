import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "../Home";
import Detail from "../Detail";
import Pokedex from "../Pokedex";

export const Navigate = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route index component={<Home />} />
        <Route path="/pokedex" component={<Pokedex />} />
        <Route path="/detail" component={<Detail />} />
      </Router>
    </BrowserRouter>
  );
}


