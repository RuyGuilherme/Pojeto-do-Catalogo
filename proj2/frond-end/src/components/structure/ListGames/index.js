import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';

// faz uma requisicao para a API http://localhost:3001/games e vai listar na tela
// em cards a lista de jogos
const ListGames = () => {
  // estado = memoria do componennte
  // const [count, setCount] = useState(0);
  const [games, setGames] = useState([]);

  // dispara uma funcao de call back quando o componete é criado ou
  // quando esta vinculado a uma variavel de estado
  useEffect(() => {
    getGames();
  }, [])

  const getGames = async () => {
    // faz a requisao http GET atraves do fetch API do javascript.
    const response = await Api.fetchGetAll();
    // gamesApi = dados que recebe da api
    const gamesApi = await response.json();
    console.log('RESPOSTA DA API', gamesApi);
    // atualizar o meu estado em memoria com os games para que possa atualizar o DOM.
    setGames(gamesApi);
  }
  
  // const handleButton = () => {
  //   setCount(count + 1);
  // }

  return(
    <div>
      <p className='text-center h5'>LISTAGEM DE JOGOS</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          games.map((game) => (
            <Card key={game._id} game={game}/>
          ))
        }

      </div>
      {/* <button onClick={handleButton}>Incrementa</button>
      <p>Numero: { count }</p> */}
    </div>
  )
}
export default ListGames;