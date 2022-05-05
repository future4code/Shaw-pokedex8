import React from "react";
import { MdCatchingPokemon } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { Button, Div, Img, Nav } from './styled';



const HeaderHome = () => {

  const routes = useNavigate()

  const PageDaPokedex = () => {
    routes("/pokedex")
  }
    return (
      <Nav>
        <Img src="https://i.postimg.cc/KY9P2h0V/Logo-Est-tica.png"/>
        <Div>
          <div><Button onClick={() => PageDaPokedex()}><MdCatchingPokemon className="icon"/>Pokedex</Button></div>  
        </Div>       
      </Nav>
    )
}
export default HeaderHome;