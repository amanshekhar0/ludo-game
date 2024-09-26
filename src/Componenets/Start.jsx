import React from 'react';
import Dices from '../assets/Dices.png';

const Start = ({ toggle }) => {
  return (
    <div className='button-page'>
      <div className='image'>
        <img src={Dices} alt='' />
      </div>
      <div className='second-div'>
        <h1 className='dice-game'>DICE GAME</h1>
        <button onClick={toggle} className='play-now'>
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default Start;
