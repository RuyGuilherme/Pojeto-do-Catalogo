import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
  const game = props.game;
  return (
    <Link to={`/view/${game._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nome: {game.nome}</h5>
          <p className="card-text">Valor: {game.valor}</p>
          <p className="card-text">Nota: {game.nota}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;