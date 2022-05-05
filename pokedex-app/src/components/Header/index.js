import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ButtonHome = styled.button`
display:flex ;
justify-content: space-between;
`



const Header = () => {
    return (
        <ButtonHome >
           <Link to="/">Voltar</Link>
           <Link to="/pokedex">Lista Pokedex</Link>
            
        </ButtonHome >
    )
}

export default Header;
