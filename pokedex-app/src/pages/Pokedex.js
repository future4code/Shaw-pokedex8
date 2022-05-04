import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Pokedex() {

  const navigate = useNavigate()
  // funçao que retorna para a home page
  const IrParaHomePage = () => {
    navigate(-1)
  }
  // funçao que vara para a pagina de detalhes , sera compartilhada na pagina home e pokedex
  const IrParaDetailsPage = () => {
    navigate("/details")
  }


  return (
    <div >
      <div>
         {/* header */ }
        <button onClick={IrParaHomePage}>Voltar Para Lista de Pokemon</button>
        <h2>Pokedex</h2>
      </div>
      <div>
        {/* aki tera varios cards de pokemons , com 2 botoes , remover e ver detalhes dos pokemons  */}
        <button onClick={""}>Remover</button>
        <button onClick={IrParaDetailsPage}>Ver detalhes</button>
      </div>
    </div>
  );
}


