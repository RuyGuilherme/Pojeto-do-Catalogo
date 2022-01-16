import React from 'react';
import ListAfazeres from '../../components/structure/ListAfazeres';

const Home = () => {
  return(
    <div className="container">
      <h1 className="text-center h1 mt-3">Lista de Afazeres</h1>
      <ListAfazeres />
    </div>
  )
}

export default Home;