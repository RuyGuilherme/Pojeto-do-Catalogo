import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from '../../Api/Api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Afazer = () => {
  const { id } = useParams();
  const [afazer, setAfazer] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);  
  
  useEffect(() => {
    getAfazerById();    
  }, []);

  const getAfazerById = async () => {
    try {
      const request = await Api.fetchGetById(id);
      if(request.status === 400) {
        alert('Erro na Api, Id Invalido')
      }
      if(request.status === 500) {
        console.error('Erro no servidor')
      }
      const afazer = await request.json().catch(err => console.log('ERRO', err));
      setAfazer(afazer);
    } catch(err) {
      console.log('erro', err);
    }
    // const request = await Api.fetchGetById(id);
    // const afazer = await request.json();
  }

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
  }

  return(
    <div className="p-2">
      <div className="card container col-6 p-2">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h2 className="card-title">Afazer: {afazer.titulo}</h2>
            <ul className="nav nav-pills d-flex align-items-center">
              <li className="nav-item p-2">
                <Link to={`/edit/${afazer._id}`}>
                  <button type="button" className="btn btn-outline-secondary">Editar</button>
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-danger" onClick={abreModal}>X</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">Descrição: {afazer.descricao}</p>
          <p className="card-text">Prioridade: {afazer.prioridade}</p>
          <p className="card-text">Status: {afazer.status}</p>
          <p className="card-text">Prazo: {afazer.prazo}</p>
          <p className="card-text">Criado em: {afazer.dataCriacao}</p>
        </div>
      </div>
      <Modal open={open} onClose={fechaModal} center>
        <h2 className='my-4'>Deseja realmente excluir o afazer?</h2>
        <div className='d-flex w-50 mx-auto justify-content-around'>
          <button className='btn btn-danger me-2' onClick={fechaModal}>Não</button>
          <button className='btn btn-success' onClick={handleDelete}>Sim</button>
        </div>
      </Modal>
    </div>
  );
}

export default Afazer;