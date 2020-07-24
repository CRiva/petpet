import { action, observable, reaction } from "mobx";
import StatusStore from './StatusStore';

import PoopStore from './PoopStore';
import sadFace from '../sad.png';
import neturalFace from '../netural.png';
import happyFace from '../happy.png';

export class GameStore {
  @observable hunger;
  @observable happiness;
  @observable dirtiness;
  @observable image;
  @observable poopStore;
  @observable recentlyFed;

  hungerRate = 5;
  happinessRate = -2;
  dirtinessRate = 3;
  poopRate = 3;

  isHungry = false;
  isDirty = false;
  
  constructor(attributes = {}) {
    const {
      hunger,
      happiness,
      dirtiness
    } = attributes;
    this.hunger = hunger || new StatusStore({ name: 'Hunger', percentage: 0, color: 'danger' });
    this.happiness = happiness || new StatusStore({ name: 'Happiness', percentage: 100, color: 'success' });
    this.dirtiness = dirtiness || new StatusStore({ name: 'Dirtiness', percentage: 0, color: 'secondary' });
    this.poopStore = new PoopStore();
    this.image = happyFace;
    this.recentlyFed = 0;
    this.checkDirtiness();

    reaction(
      () => this.hunger.percentage,
      () => this.checkHunger()
    );
    reaction(
      () => this.poopStore.poops,
      () => this.checkDirtiness()
    );
    reaction(
      () => this.happiness.percentage,
      () => this.checkHappiness()
    );
  }

  @action
  checkHunger = () => {
    if (this.hunger.percentage === 100 && !this.isHungry){
      this.happinessRate = this.happinessRate + -(this.hungerRate)
      this.isHungry = true;
    } else if (this.hunger.percentage < 100 && this.isHungry) {
      this.happinessRate = this.happinessRate + this.hungerRate;
      this.isHungry = false;
    }
  };

  @action
  checkDirtiness = () => {
    this.dirtinessRate = this.poopStore.poops;
    if (this.dirtiness.percentage === 100 && !this.isDirty){
      this.happinessRate = this.happinessRate + -(this.dirtinessRate)
      this.isDirty = true;
    } else if (this.dirtiness.percentage < 100 && this.isDirty) {
      this.happinessRate = this.happinessRate + this.dirtinessRate;
      this.isDirty = false;
    }
  };

  @action
  checkHappiness = () => {
    if (this.happiness.percentage <= 30 ){
      this.image = sadFace;
    } else if (this.happiness.percentage > 60) {
      this.image = happyFace;
    } else{
      this.image = neturalFace;
    }
  };

  @action.bound
  updateAttributes = () => {
    this.updateAttribute(this.hunger, this.hungerRate);
    this.updateAttribute(this.happiness, this.happinessRate);
    this.updateAttribute(this.dirtiness, this.dirtinessRate);
  }

  @action
  updateAttribute = (attribute, amount) => {
    if (attribute.percentage + amount >= 100) {
      attribute.percentage = 100;
    } else if (attribute.percentage + amount <= 0) {
      attribute.percentage = 0
    } else {
      attribute.percentage = attribute.percentage + amount;
    }
  }

  @action
  updateRecentlyFed = (amount) => {
    if (this.recentlyFed + amount <= 0) {
      this.recentlyFed = 0
    } else {
      this.recentlyFed = this.recentlyFed + amount;
    }
  }
}

export default new GameStore();
