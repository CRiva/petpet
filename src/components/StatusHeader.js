import React from 'react';
import { useObserver } from 'mobx-react';
import StatusBar from './StatusBar';

const StatusHeader = ({ gameStore }) => {
  return useObserver(() => (
    <div>
      <StatusBar
        color={gameStore.hunger.color}
        percentage={gameStore.hunger.percentage}
        label={`${gameStore.hunger.name}: ${gameStore.hunger.percentage}`}
      />
      <br />
      <StatusBar
        color={gameStore.happiness.color}
        percentage={gameStore.happiness.percentage}
        label={`${gameStore.happiness.name}: ${gameStore.happiness.percentage}`}
      />
      <br />
      <StatusBar
        color={gameStore.dirtiness.color}
        percentage={gameStore.dirtiness.percentage}
        label={`${gameStore.dirtiness.name}: ${gameStore.dirtiness.percentage}`}
      />
    </div>
  ));
}

export default StatusHeader;
