import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const View = () => {
  const navigate = useNavigate();
  // incializo o estado game para poder fazer atualizacao no dom
  const [game, setGame] = useState({});
  // crio o estado de abertura do modal
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    getGameById();
  }, [])

  // acesso o id no parametro da url
  const { id } = useParams();
  console.log(id);

  // Declara as funcoes de gerencimento do modal (abertura e fechamento)
  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);
  
  const getGameById = async () => {
    // realiza requisicao GET para api
    const request = await Api.fetchGetById(id);
    // retorna o jogo encontrado e salva na variavel game
    const game = await request.json();

    // atualiza o estado com o valor vindo da api
    setGame(game);
    console.log(game);
  }

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
  }


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
            <h4>Nome: {game.nome} </h4>
            <p>Genero: {game.genero}</p>
            <p>Nota: {game.nota}</p>
            <p>Plataforma: {game.plataforma}</p>
            <p>Valor: {game.valor}</p>
            <p>Ano Lancamento: {game.anoLancamento}</p>
            <div className='btn-group my-3 w-100'>
              <Link to={`/edit/${game._id}`} className='btn btn-info text-white'>Editar</Link>
              <button className='btn btn-danger' onClick={abreModal}>Excluir</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={fechaModal} center>
        <h2 className='my-4'>Deseja realmente excluir o game ?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className='btn btn-danger me-2' onClick={fechaModal}>Não</button>
          <button className='btn btn-success' onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  )
}

export default View