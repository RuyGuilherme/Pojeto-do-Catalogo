import React from "react";
import Api from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    const afazer = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo
    }

    try {
      const response = await Api.fetchPost(afazer);
      if(response.status === 500) {
        console.error('Erro no servidor')
      }
      const result = await response.json().catch(err => console.log('ERRO', err));
      alert(result.message);
    } catch(err) {
      console.log('erro', err);
    }

    // const response = await Api.fetchPost(afazer);
    // const result = await response.json();

    navigate('/');
  }

  return (
    <div className="card container col-6 p-3">
      <div className="row g-3 align-items-center">
        <h2>Adicionar Novo Afazer</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input id="titulo" type="text" placeholder="Titulo" className="form-control" name="titulo" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input id="descricao" type="text" placeholder="Descrição" className="form-control" name="descricao" />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="prioridade" className="form-label">Prioridade</label>
              <select id="prioridade" type="text" placeholder="Prioridade" className="form-select" name="prioridade">
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="status" className="form-label">Status</label>
              <select id="status" type="text" placeholder="Status" className="form-select" name="status">
                <option>Feito</option>
                <option>Fazendo</option>
                <option>Afazer</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="prazo" className="form-label">Prazo</label>
            <input type="date" id="date" className="form-control" name="prazo"/>
          </div>
          <button id="botao" type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>  
    </div>
  )
}

export default Cadastro;