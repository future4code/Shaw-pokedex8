import React, { useContext } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { Button, ButtonPagina, Div, DivButton, DivButtonPokemon, DivContainer, DivPokemon, FotoPokemon } from './styled';


export default function Home(){

    const {pokemons, pokedex, lista, paginacao, setPaginacao, setLista, setPokemons, setPokedex}
    =useContext(GlobalStateContext)

    
    const navigate = useNavigate()

    const onClickPokemon = (name)=>{
        verDetalhes(navigate, name)
    }

    const verDetalhes =(navigate, name) => {
        navigate(`/detalhes/${name}`)
    }

    const onClickAdd = ((poke)=>{
    
        const index = lista.findIndex((i)=>{
            return i.name === poke. name
        })
    
        if(index === -1){
            const listaPokes = lista
            listaPokes.push(poke)
            setLista(listaPokes)

            const novaLista = pokemons.filter((removePoke)=>{ //removendo da home
              return removePoke.name !== poke.name
          })
          setPokemons(novaLista)
        }
    
    })



    return (
      <div>
        <HeaderHome />
        <DivContainer>
                <Div>
                    {pokemons.map (list =>(
                    <DivPokemon key={list.name}> 
                            <p className="nome">{list.name}</p>
                            <FotoPokemon src={list.image} alt={list.name}/>
                            <DivButton>

                            <DivButtonPokemon><Button onClick={()=>onClickAdd(list)} >Adicionar</Button></DivButtonPokemon>

                            <DivButtonPokemon><Button key={list.id} onClick={()=>onClickPokemon(list.name)}>Detalhes</Button></DivButtonPokemon>

                            </DivButton>
                    </DivPokemon>
                    ))}

                </Div>
            <DivButton>
                <ButtonPagina onClick={()=>setPaginacao(paginacao>=21? paginacao-21 : paginacao)}><BsFillArrowLeftCircleFill className="iconHome"/></ButtonPagina>
                
                <ButtonPagina onClick={()=>setPaginacao(paginacao + 21)}><BsFillArrowRightCircleFill className="iconHome"/></ButtonPagina>
            </DivButton>
            </DivContainer>
      </div>
        
    )
}
