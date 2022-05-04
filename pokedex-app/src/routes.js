import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";


const RoutesApp = () => {

  return (
      <BrowserRouter>
          <Routes>
              <Route index element ={<Home />} />
              {/* <Route path="/home" element ={<Home />} /> */}
              <Route path="/details" element ={<Detail />} />
              <Route path="/pokedex" element ={<Pokedex/>} />
          </Routes>
      </BrowserRouter> 
  );
  
}

export default RoutesApp;
