import React from 'react';
import { useStore } from '../contexts/GameContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StatusBar from '../components/StatusBar';

const Game = () => {
  const gameStore = useStore();

  return (
    <div>
      <StatusBar />
    </div>
  );
}

export default Game;
