import React from 'react';
import GameStore from '../stores/GameStore';
import { useLocalStore } from 'mobx-react';

const gameContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(GameStore);
  return <gameContext.Provider value={store}>{children}</gameContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(gameContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
}
