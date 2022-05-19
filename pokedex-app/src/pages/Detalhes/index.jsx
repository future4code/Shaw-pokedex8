import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import GlobalStateContext from "../../Global/GlobalStateContext";
import styled from "styled-components";


const MainConteiner = styled.div`
    display: flex;
`
const Imagem = styled.img`
    height: 80%;
    width: 80%;
    margin: auto;
`
const ContainerImg = styled.div`
    width: 50%;
    border: 5px outset #5D83C1;
    border-radius: 33px 33px 33px 33px;
    background-color: #e8e4e4eb;

`
const ContainerTexto = styled.div`
    width: 100%;
    border: 5px outset #5D83C1;
    border-radius: 33px 33px 33px 33px;
    margin-bottom: 4%;
    text-align: center;
    background-color: #e8e4e4eb;
`
const ContainerDasInformaçoes = styled.div`
 margin-left: 2%;
 width: 45%;
`




const Detalhes = () => {

    const detalhesPokemon = useContext(GlobalStateContext)

    const [info, setInfo] = useState([])
    const [foto, setFoto] = useState()
    const [type, setType] = useState()
    const [type2, setType2] = useState()
    const [habilidade, setHabilidade] = useState()
    const [habilidade2, setHabilidade2] = useState()


    const { name } = useParams();
    //console.log(params)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                console.log(response.data)
                setInfo(response.data)
                setFoto(response.data.sprites.other.home.front_default)
                setType(response.data.types[0].type.name)
                setType2(response.data.types[1].type.name)
                setHabilidade(response.data.abilities[0].ability.name)
                setHabilidade2(response.data.abilities[1].ability.name)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);




    return (

        <div>
            <Header />
            <h1>Página Detalhes do Pokemon</h1>

            <MainConteiner>
                <ContainerImg>
                    <Imagem src={foto} alt="Pokemon" />
                </ContainerImg>

                <ContainerDasInformaçoes>
                    <ContainerTexto>

                        <h1> <u> {info.name} </u></h1>
                        <div>
                             <h3>{type} / {type2}</h3>
                        </div>
                    </ContainerTexto>

                    <ContainerTexto>
                        <h3>Altura: {info.height} cm | Peso: {info.weight} g</h3>

                        <h4><u>Habilidades:</u></h4>
                        <h4>{habilidade} / {habilidade2}</h4>
                    </ContainerTexto>
                </ContainerDasInformaçoes>
            </MainConteiner>
        </div>
    )
}

export default Detalhes;