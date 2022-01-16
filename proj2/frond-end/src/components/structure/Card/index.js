import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const afazer = props.afazer;
  return (
    <Link to={`/Afazer/${afazer._id}`} className="text-dark fw-bold text-decoration-none">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Titulo: {afazer.titulo}</h5>
            <p className="card-text">Descrição: {afazer.descricao}</p>
            <p className="card-text">Prioridade: {afazer.prioridade}</p>
            <p className="card-text">Status: {afazer.status}</p>
            <p className="card-text">Prazo: {afazer.prazo}</p>
            <p className="card-text">Criado em: {afazer.dataCriacao}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card;