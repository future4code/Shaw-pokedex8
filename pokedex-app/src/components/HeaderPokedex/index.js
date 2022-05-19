import React from "react";
import { FaHome } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Button, Div, Img, Nav } from './styled';


const HeaderPokedex = () => {

  const routes = useNavigate()

  const PageDaHome = () => {
    routes("/")
  }
    return (
      <Nav>
        <Img src="https://i.postimg.cc/KY9P2h0V/Logo-Est-tica.png"/>
        <Div>
          <div><Button onClick={() => PageDaHome()}><FaHome className="icon"/>Home</Button></div>  
        </Div>       
      </Nav>
    )
}
export default HeaderPokedex;