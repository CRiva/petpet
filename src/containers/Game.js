import React, { useEffect } from 'react';
import { inject, useObserver } from 'mobx-react';

import './Game.css';
import StatusHeader from '../components/StatusHeader';
import Pet from '../components/Pet';
import ActionBar from '../components/ActionBar';
import { useInterval } from '../helpers/useInterval';
import PoopArea from '../components/PoopArea';
import poop from '../poop.png';
import HiddenArea from '../components/HiddenArea';

import bathSound from '../bathSound.mp3'
import eatSound from '../eatSound.mp3'
import laughSound from '../lol.mp3'
import pickPoopSound from '../pickPoop.mp3'


const Game = ({ gameStore }) => {
  useEffect(() => {
    const height = document.getElementById('poop-area').clientHeight;
    const width = document.getElementById('poop-area').clientWidth;
    gameStore.poopStore.updatePoopArea(height, width);
    gameStore.poopStore.poopArea = document.getElementById('poop-area');
  }, [])

  const feedPet = () => {
    document.getElementById('eatSound').play();
    gameStore.updateAttribute(gameStore.hunger, -15);
    gameStore.updateAttribute(gameStore.happiness, +10);
  };
  const cleanPet = () => {
    document.getElementById('bathSound').play();
    while (gameStore.poopStore.poops>0) {

      gameStore.poopStore.poopArea.removeChild(gameStore.poopStore.poopArea.lastChild);
      gameStore.poopStore.poops -=1;
  }
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


  useInterval(() => {
    gameStore.updateAttributes();
  }, 1000);


  useInterval(() => {
    gameStore.poopStore.createPoop();
  }, 3000);


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
      <HiddenArea>
        <img src={poop} className="poop" id ="hiddenPoop" alt="Poop"/>
        <div className="gameOver">
          <h1>Your pet died from being burried in it's own crap... Are you sure you're ready to be a pet owner?</h1>
          <h1>Click the poop to restart</h1>
        </div>
        <audio id="bathSound">
            <source src={bathSound}></source>
        </audio>
        <audio id="eatSound">
            <source src={eatSound}></source>
        </audio>
        <audio id="laughSound">
            <source src={laughSound}></source>
        </audio>
        <audio id="pickPoopSound">
            <source src={pickPoopSound}></source>
        </audio>
      </HiddenArea>
      <PoopArea>
        <StatusHeader gameStore={gameStore} />
        
        <Pet petPet={petPet} image={gameStore.image} />
        
        <ActionBar feedPet={feedPet} cleanPet={cleanPet} />
      </PoopArea>
    </div>
  ));
}

export default inject('gameStore')(Game);
