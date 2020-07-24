import React from 'react';
import { Provider } from 'mobx-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css';
import Game from './Game';
import gameStore from '../stores/GameStore';

const stores = { gameStore };

const App = () => {
  return (
    <Provider {...stores}>
      <Container className='App-Container' >
        <Row>
          <Col xs={12}>
            <Game />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
