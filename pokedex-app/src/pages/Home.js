import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";






const Home = () => {

  const navigate = useNavigate()
  // botão para linka a pagina home a pagina da pokedex
  const IrParaPokedexPage = () => {
    navigate("/pokedex")
  }
  // funçao que vara para a pagina de detalhes , sera compartilhada na pagina home e pokedex
  const IrParaDetailsPage = () => {
    navigate("/details")
  }

  return (

    <div>
      <div>
        {/* aqui é o menu */}
        <button onClick={IrParaPokedexPage}> ver minha POKEDEX</button>
        <h2>Lista de Pokemons</h2>
      </div>
      <div>
        {/* aki virao os cards com os pokemons , e terão 2 botoes de adicionar a pokedex
        e ver detalhes dos pokemons */ }
        <button onClick={""}> Adicionar </button>
        <button onClick={IrParaDetailsPage}> Ver detalhes</button>
      </div>

    </div>

  );
}

export default Home;
