import React from "react";
import { Route, Routes } from "react-router-dom";
import Detalhes from "../pages/Detalhes";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";


const Router = () => {
    return (      
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/detalhes/:name" element ={<Detalhes />} />
                <Route path="/pokedex" element ={<Pokedex />} />
                <Route path="*" element ={<h1>Página não encontrada!</h1>} />
            </Routes>
    )
}

export default Router;