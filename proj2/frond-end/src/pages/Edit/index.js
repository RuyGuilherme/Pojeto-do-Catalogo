import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../Api/Api";

const Edit = () => {
  const navigate = useNavigate();

  const [afazer, setAfazer] = useState({
    titulo: '',
    descricao: '',
    prioridade: '',
    status: '',
    prazo: '',
  });

  useEffect(() => {
    getAfazerById();
  }, []);

  const { id } = useParams();

  const getAfazerById = async () => {
    try {
      const response = await Api.fetchGetById(id);
      if(response.status === 500) {
        console.error('Erro no servidor')
      }
      const afazer = await response.json().catch(err => console.log('ERRO', err));
      setAfazer(afazer);
    } catch(err) {
      console.log('erro', err);
    }
    // const afazer = await response.json();
  };

  const handleFieldsChange = (evento) => {
    const afazerEdit = {
      ...afazer
    }
    afazerEdit[evento.target.name] = evento.target.value;
    setAfazer(afazerEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await Api.fetchPut(afazer, id);
    const data = await response.json();
    alert(data.message);

    navigate(`/Afazer/${id}`)
  }

  return (
    <div className="card container col-8 p-3">
      <div className="row g-3 align-items-center">
        <h2>Adicionar Novo Afazer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input id="titulo" type="text" placeholder="Titulo" className="form-control" name="titulo" value={afazer.titulo} onChange={handleFieldsChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input id="descricao" type="text" placeholder="Descrição" className="form-control" name="descricao" value={afazer.descricao} onChange={handleFieldsChange} />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="prioridade" className="form-label">Prioridade</label>
              <select id="prioridade" type="text" placeholder="Prioridade" className="form-select" name="prioridade" value={afazer.prioridade} onChange={handleFieldsChange} >
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="status" className="form-label">Status</label>
              <select id="status" type="text" placeholder="Status" className="form-select" name="status" value={afazer.status} onChange={handleFieldsChange} >
                <option>Feito</option>
                <option>Fazendo</option>
                <option>Afazer</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="prazo" className="form-label">Prazo</label>
            <input id="prazo" type="text" placeholder="Prazo" className="form-control" name="prazo" value={afazer.prazo} onChange={handleFieldsChange} />
          </div>
          <button id="botao" type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>  
    </div>
  );
}

export default Edit;