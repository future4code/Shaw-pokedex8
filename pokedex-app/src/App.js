import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStates from "../src/Global/GlobalStates";
import RouterApp from "./routes/Router";

const App = () => {

  return (
    <GlobalStates>
    <BrowserRouter>
      
      <RouterApp  />
    </BrowserRouter>
    </GlobalStates>
  );
}

export default App;