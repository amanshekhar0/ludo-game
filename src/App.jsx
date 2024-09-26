import React, { useState } from 'react';
import Start from './Componenets/Start';
import GamePlay from './Componenets/GamePlay';
import './App.css'
import Rolldice from './Componenets/Rolldice';

const App = () => {

  const [isGamePlaying, setIsGamePlaying] = useState(false);

  const toggleGamePlay = () => {
    setIsGamePlaying(true);
  };

  return (
    <div>
      {isGamePlaying ? (
        <GamePlay />
      ) : (
        <Start toggle={toggleGamePlay} />
      )}
     
  
    </div>
  );
};

export default App;
