import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Pet = ({ petPet, image }) => {
  return(
    <Row className='justify-content-xs-center'>
      <Col xs={{ span: 8, offset: 2}} md={{ span: 6, offset: 3}}>
        <Image onClick={petPet} src={image} alt='Pet' />
      </Col>
    </Row>
  )
}

export default Pet;
