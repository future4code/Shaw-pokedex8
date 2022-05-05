import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useState} from 'react';
import { useEffect } from "react";





const Home = () => {

  const navigate = useNavigate()

  const [Pokemons, setPokemons] = useState([])

  useEffect(() => {

    getAllPokeName();
  }, []);


  // botão para linka a pagina home a pagina da pokedex
  const IrParaPokedexPage = () => {
    navigate("/pokedex")
  }
  // funçao que vara para a pagina de detalhes , sera compartilhada na pagina home e pokedex
  const IrParaDetailsPage = () => {
    navigate("/details")
  }


  const getAllPokeName = () => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=151&limit=151")
      .then((res) => {
        setPokemons(res.data.results)
        
      })
      .catch((err) => {
        alert("[ERRO]")
      })
  };

  const mapPokemons = Pokemons && Pokemons.map((pokemon)=>{

    return(
      <p> {pokemon.name} </p>
      // <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    ) 

  })
  

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
        {mapPokemons}
        <button onClick={""}> Adicionar </button>
        <button onClick={IrParaDetailsPage}> Ver detalhes</button>
      </div>

    </div>

  );
}

export default Home;
