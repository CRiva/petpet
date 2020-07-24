import React from 'react';
import Row from 'react-bootstrap/Row';


const Pet = ({ petPet, image }) => {
  return(
    <Row className='justify-content-md-center'>
      <img onClick={petPet} src={image} alt='Pet' />
    </Row>
  )
}

export default Pet;
