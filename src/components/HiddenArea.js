import React from 'react';


import poop from '../poop.png';
import bathSound from '../bathSound.mp3'
import eatSound from '../eatSound.mp3'
import laughSound from '../lol.mp3'
import pickPoopSound from '../pickPoop.mp3'

const HiddenArea = (props) => {
  return(
    <div>
      <img src={poop} className="poop" id ="hiddenPoop" alt="Poop"/>
      <div className="gameOver">
        <h2>Your pet died from being burried in it's own crap... Are you sure you're ready to be a pet owner?</h2>
        <h4>Click the poop to restart (maybe that will teach you how to cleanup after your pet.)</h4>
      </div>
      <audio id="bathSound">
          <source src={bathSound}></source>
      </audio>
      <audio id="eatSound">
          <source src={eatSound}></source>
      </audio>
      <audio id="laughSound">
          <source src={laughSound}></source>
      </audio>
      <audio id="pickPoopSound">
          <source src={pickPoopSound}></source>
      </audio>
    </div>
  )
}

export default HiddenArea;
