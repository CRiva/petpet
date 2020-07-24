import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'

import foodBowl from '../foodBowl.png';
import washTub from '../washtub.png';

const ActionBar = ({ feedPet, cleanPet }) => {

  return(
    <Row className='justify-content-md-center'>
      <Col md={4}>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            onClick={feedPet}
            alt='Food Bowl'
            src={foodBowl}
          />
          <Figure.Caption>
            Feed
          </Figure.Caption>
        </Figure>
      </Col>
      <Col md={{  offset: 4 }} >
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            onClick={cleanPet}
            alt='Wash Tub'
            src={washTub}
          />
          <Figure.Caption>
            Clean
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  )
}

export default ActionBar;
