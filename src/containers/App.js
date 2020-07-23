import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

import Game from './Game';

const App = () => {
  return (
    <div className='App' >
      <Container className='App-Container' >
        <Row>
          <Col>
            <Game />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
