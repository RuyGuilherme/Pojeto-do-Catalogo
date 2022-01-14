import React from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const nome = evento.target.nome.value;
    const plataforma = evento.target.plataforma.value; 
    const valor = evento.target.valor.value;
    const genero = evento.target.genero.value;
    const nota = evento.target.nota.value;
    const anoLancamento = evento.target.ano.value;

    const game = {
      nome,
      plataforma,
      valor,
      genero,
      nota,
      anoLancamento
    }
    console.log(game);

    const response = await Api.fetchPost(game);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-title'>
          <h3 className='m-3'>Cadastro de Games</h3>
        </div>
        <div className='card-body'>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nome'>Nome do Game:</label>
                  <input id='nome' className='form-control' type='text' placeholder='Digite o nome do game' name='nome'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='plataforma'>Plataforma do Game:</label>
                  <input id='plataforma' className='form-control' type='text' placeholder='Digite a plataforma do game' name='plataforma'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='valor'>Valor do Game:</label>
                  <input id='valor' className='form-control' type='text' placeholder='Digite o valor do game' name='valor'/>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='genero'>Genero do Game:</label>
                  <input id='genero' className='form-control' type='text' placeholder='Digite o genero do game' name='genero'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nota'>Nota do Game:</label>
                  <input id='nota' className='form-control' type='text' placeholder='Digite a nota do game' name='nota'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='ano'>Ano do Game:</label>
                  <input id='ano' className='form-control' type='text' placeholder='Digite o ano do game' name='ano'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <button className='btn btn-outline-primary'>Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro