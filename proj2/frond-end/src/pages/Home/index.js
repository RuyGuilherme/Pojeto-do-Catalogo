import React from 'react';
import ListGames from '../../components/structure/ListGames';

const Home = () => {
  return(
    <div className="container">
      <h1 className="text-center h1 mt-3">Blue Games ! ! </h1>
      <ListGames/>
    </div>
  )
}

export default Home;