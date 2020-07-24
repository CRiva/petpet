import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import foodBowl from '../foodBowl.png';
import washTub from '../washtub.png';

const ActionBar = ({ feedPet, cleanPet }) => {

  return(
    <Row className='justify-content-md-center'>
      <Col md={3} xs={6}>
        <Image
          onClick={feedPet}
          alt='Food Bowl'
          src={foodBowl}
          className="align-self-center"
        />
      </Col>
      <Col md={{ span: 3, offset: 6 }} xs={6} >
        <Image
          onClick={cleanPet}
          alt='Wash Tub'
          src={washTub}
        />
      </Col>
    </Row>
  )
}

export default ActionBar;
