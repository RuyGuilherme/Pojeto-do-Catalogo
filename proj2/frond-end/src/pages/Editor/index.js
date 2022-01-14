import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();

  // declaro o estado inicial do game
  const [game, setGame] = useState({
    nome: '',
    plataforma: '',
    valor: '',
    genero: '',
    nota: '',
    anoLancamento: '',
  });

  useEffect(() => {
    getGameById();
  }, []);

  //buscar o game que foi cadastrado no backend
  //buscar o game pelo id passado via parametro da url
  const { id } = useParams();

  // buscar o game no backend pelo seu id
  const getGameById = async () => {
    const response = await Api.fetchGetById(id);
    const game = await response.json();
    console.log(game);
    setGame(game);
  };

  const handleFieldsChange = (evento) => {
    console.log(evento.target.name);
    //Copia do objeto do estado(Memoria do compoente)
    const gameEdit = {
      ...game
    }
    //atualiza os campos do objeto de forma dinamica de acordo com o input que o usuario digitou
    gameEdit[evento.target.name] = evento.target.value;
    //atualizar o estado do game
    setGame(gameEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await Api.fetchPut(game, id);
    const data = await response.json();
    alert(data.message);

    navigate(`/view/${id}`);

  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <h3 className="m-3">Ediçao do Game</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nome">Nome do Game:</label>
                  <input
                    id="nome"
                    className="form-control"
                    type="text"
                    placeholder="Digite o nome do game"
                    name="nome"
                    value={game.nome}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="plataforma">Plataforma do Game:</label>
                  <input
                    id="plataforma"
                    className="form-control"
                    type="text"
                    placeholder="Digite a plataforma do game"
                    name="plataforma"
                    value={game.plataforma}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="valor">Valor do Game:</label>
                  <input
                    id="valor"
                    className="form-control"
                    type="text"
                    placeholder="Digite o valor do game"
                    name="valor"
                    value={game.valor}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="genero">Genero do Game:</label>
                  <input
                    id="genero"
                    className="form-control"
                    type="text"
                    placeholder="Digite o genero do game"
                    name="genero"
                    value={game.genero}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="nota">Nota do Game:</label>
                  <input
                    id="nota"
                    className="form-control"
                    type="text"
                    placeholder="Digite a nota do game"
                    name="nota"
                    value={game.nota}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="ano">Ano do Game:</label>
                  <input
                    id="ano"
                    className="form-control"
                    type="text"
                    placeholder="Digite o ano do game"
                    name="anoLancamento"
                    value={game.anoLancamento}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success me-2" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-primary">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;