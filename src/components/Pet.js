import React from 'react';
import Row from 'react-bootstrap/Row';

import pet from '../Pug.png';

const Pet = ({ petPet }) => {
  return(
    <Row className='justify-content-md-center'>
      <img onClick={petPet} src={pet} alt='Pet' />
    </Row>
  )
}

export default Pet;
