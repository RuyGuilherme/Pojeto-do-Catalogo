import React, { useState, useEffect } from 'react';
import Api from '../../../Api/Api';
import Card from '../Card';

const ListAfazeres = () => {
  const [afazeres, setAfazeres] = useState([]);

  useEffect(() => {
    getAfazeres();
  }, [])

  const getAfazeres = async () => {
    try {
      const response = await Api.fetchGetAll();
      if(response.status >= 400 && response.status < 600) {
        alert('Erro na Api')
      }
      const afazeresApi = await response.json();
      console.log('RESPOSTA DA API', afazeresApi);
      setAfazeres(afazeresApi);
    }catch (err) {
      console.error('ERRO:', err);
    }
    // const response = await Api.fetchGetAll();
    // const afazeresApi = await response.json();
    // setAfazeres(afazeresApi);
  }

  return(
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          afazeres.map((afazer) => (
            <Card key={afazer._id} afazer={afazer}/>
          ))
        }
      </div>
    </div>
  )
}

export default ListAfazeres;