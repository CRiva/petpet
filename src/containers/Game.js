import React, { useEffect } from 'react';
import { inject, useObserver } from 'mobx-react';

import './Game.css';
import StatusHeader from '../components/StatusHeader';
import Pet from '../components/Pet';
import ActionBar from '../components/ActionBar';
import { useInterval } from '../helpers/useInterval';
import PoopArea from '../components/PoopArea';
import poop from '../poop.png';



const Game = ({ gameStore }) => {

  useEffect(() => {
    const height = document.getElementById('poop-area').clientHeight;
    const width = document.getElementById('poop-area').clientWidth;
    gameStore.poopStore.updatePoopArea(height, width);
    gameStore.poopStore.poopArea = document.getElementById('poop-area');
  }, [])

  const feedPet = () => {
    gameStore.updateAttribute(gameStore.hunger, -15);
    gameStore.updateAttribute(gameStore.happiness, +10);
  };
  const cleanPet = () => {
    while (gameStore.poop.poops>0) {
      gameStore.poop.poops -=1;
      gameStore.poop.poopArea.removeChild(gameStore.poop.poopArea.lastChild);
  }
    gameStore.dirtiness.percentage = 0;
    if (gameStore.isHungry){
      gameStore.updateAttribute(gameStore.happiness, +50);
    }else{
      gameStore.updateAttribute(gameStore.happiness, +100);
    }
    
  };
  const petPet = () => {
    gameStore.updateAttribute(gameStore.happiness, 5);
  };

  useInterval(() => {
    gameStore.updateAttributes();
  }, 1000);


  useInterval(() => {
    gameStore.poopStore.createPoop();
  }, 5000);

  // const resetInterval = () => setCount(0);

  // if (gameStore.dirtiness == 100){
  //   resetInterval();
  // }

  return useObserver(() => (
    <div>
      <PoopArea>
        <img src={poop} className="poop" id ="hiddenPoop" alt="Poop" />
        <StatusHeader gameStore={gameStore} />
        <br />
        <br />
        <br />
        <Pet petPet={petPet} image={gameStore.image} />
        <br />
        <br />
        <ActionBar feedPet={feedPet} cleanPet={cleanPet} />
      </PoopArea>
    </div>
  ));
}

export default inject('gameStore')(Game);
