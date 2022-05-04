import React from 'react';
import { useNavigate } from 'react-router-dom';



const Detail =()=> {

  const navigate = useNavigate()
// funçao para voltar para a home page
  const IrParaHomePage = () => {
    navigate(-1)
  }

  return (
    <div >
      <div>
        {/* header */ }
        <button onClick={IrParaHomePage}>Voltar</button>
        <h2> `Nome do Pokemon` </h2>
        <button onClick={""}>Add e Remover da Pokedex</button>
      </div>

      <div>
        {/* imagem de referencia sobre como a pagina deve ficar OBS APAAGR DEPOIS! */}
        <img src="https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d676d66-017b-4c97-a22a-0f0c395a9811%2FUntitled.png?table=block&id=b5509c20-6ec4-4635-bd6d-e69a720cc257&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1490&userId=&cache=v2"/>
      </div>
    </div>
  );
}

export default Detail;
