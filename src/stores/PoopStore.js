import { observable, action } from "mobx";

export default class PoopStore {
  @observable height;
  @observable width;
  @observable poops;
  @observable poopArea;

  constructor(attributes = {}) {
    const {
      height,
      width,
      poopArea
    } = attributes;
    this.height = height;
    this.width = width;
    this.poops = 0;
    this.poopArea = poopArea;

  }

  @action
  updatePoopArea = (height, width) => {
    this.height = height;
    this.width = width;
  }

  @action
  removePoop = (poop) => {
    this.poopArea.removeChild(poop);
    this.poops = this.poops - 1;
  }
  
  @action
   createPoop = () => {
    const x = Math.floor(Math.random() * this.width);
    const y = Math.floor(Math.random() *  this.height);
    const poop = document.getElementById('hiddenPoop').cloneNode(true);

    poop.style.width = '50px';
    poop.style.height = '50px';
    poop.style.left = `${x}px`;
    poop.style.top = `${y}px`;
    poop.style.display = 'block';
    poop.onclick = () => {
      this.removePoop(poop);
      document.getElementById('pickPoopSound').play();
    }
    this.poops = this.poops + 1;
    this.poopArea.appendChild(poop);
  }
}
