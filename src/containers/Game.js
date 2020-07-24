import React from 'react';
import { inject, useObserver } from 'mobx-react';

import './Game.css';
import StatusHeader from '../components/StatusHeader';
import Pet from '../components/Pet';
import ActionBar from '../components/ActionBar';
import { useInterval } from '../helpers/useInterval';

const Game = ({ gameStore }) => {
  const feedPet = () => {
    gameStore.updateAttribute(gameStore.hunger, -15);
  };
  const cleanPet = () => {
    gameStore.updateAttribute(gameStore.dirtiness, -15);
  };
  const petPet = () => {
    gameStore.updateAttribute(gameStore.happiness, 5);
  };

  useInterval(() => {
    gameStore.updateAttributes();
  }, 1000);

  return useObserver(() => (
    <div>
      <StatusHeader gameStore={gameStore} />
      <br />
      <br />
      <br />
      <Pet petPet={petPet} image={gameStore.image} />
      <br />
      <br />
      <ActionBar feedPet={feedPet} cleanPet={cleanPet} />
    </div>
  ));
}

export default inject('gameStore')(Game);
