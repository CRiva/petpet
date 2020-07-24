import React, { useEffect, useState } from 'react';
import { inject, useObserver } from 'mobx-react';

import './Game.css';
import StatusHeader from '../components/StatusHeader';
import Pet from '../components/Pet';
import ActionBar from '../components/ActionBar';
import { useInterval } from '../helpers/useInterval';
import PoopArea from '../components/PoopArea';
import HiddenArea from '../components/HiddenArea';



const Game = ({ gameStore }) => {
  let [poopDelay, setPoopDelay] = useState(gameStore.poopRate * 1000);

  useEffect(() => {
    const height = document.getElementById('poop-area').clientHeight;
    const width = document.getElementById('poop-area').clientWidth;
    gameStore.poopStore.updatePoopArea(height, width);
    gameStore.poopStore.poopArea = document.getElementById('poop-area');
  }, [])

  const feedPet = () => {
    document.getElementById('eatSound').play();
    gameStore.updateAttribute(gameStore.hunger, -15);
    gameStore.updateAttribute(gameStore.happiness, +5);
    gameStore.recentlyFed = gameStore.recentlyFed + 1;
  };

  const cleanPet = () => {
    document.getElementById('bathSound').play();
    gameStore.dirtiness.percentage = 0;
    if (gameStore.isHungry){
      gameStore.updateAttribute(gameStore.happiness, +50);
    }else{
      gameStore.updateAttribute(gameStore.happiness, +100);
    }
    
  };

  const petPet = () => {
    document.getElementById('laughSound').play();
    gameStore.updateAttribute(gameStore.happiness, 5);
  };

  const poopDelaySetter = () => {
    let delta = (gameStore.poopRate * 1000) - (gameStore.recentlyFed * 500);
    if (delta <= 0) {
      delta = 250
    }
    setPoopDelay(delta);
    gameStore.updateRecentlyFed(-1);
    console.log(delta);
    console.log(gameStore.recentlyFed);
  }

  useInterval(() => {
    gameStore.updateAttributes();
    gameStore.score = gameStore.score + 1;
  }, 1000);


  useInterval(() => {
    gameStore.poopStore.createPoop();
    poopDelaySetter();
  }, poopDelay);

   const clearAll = (()=> {
    for (var i = setTimeout(function() {}, 0); i > 0; i--) {
      window.clearInterval(i);
      window.clearTimeout(i);
      if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
    }
  });

  useInterval(() => {
    if(gameStore.poopStore.poops > 5){
      while (gameStore.poopStore.poopArea.hasChildNodes()) {
        gameStore.poopStore.poopArea.removeChild(gameStore.poopStore.poopArea.lastChild);
      }
      clearAll();
      const end = document.querySelector('.gameOver').cloneNode(true);
      const restart = document.getElementById('hiddenPoop').cloneNode(true);
      restart.style.display = 'block';
      restart.onclick = () =>{
        window.location.reload(); 
      };
      end.style.display = 'block';
      gameStore.poopStore.poopArea.appendChild(end);
      gameStore.poopStore.poopArea.appendChild(restart);
    }
  }, 6000);

  

  return useObserver(() => (
    <div>
      <HiddenArea score={gameStore.score} />
      <PoopArea>
        <StatusHeader gameStore={gameStore} />
        <h3>Score: {gameStore.score}</h3>
        <Pet petPet={petPet} image={gameStore.image} />
        
        <ActionBar feedPet={feedPet} cleanPet={cleanPet} />
      </PoopArea>
    </div>
  ));
}

export default inject('gameStore')(Game);
