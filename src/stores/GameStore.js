import { action, observable, reaction } from "mobx";
import StatusStore from './StatusStore';

// reaction(
//   this.hunger.percentage,
//   (hungerLevel) => hungerLevel === 100 ? this.updateAttribute(this.happiness, -(this.hungerRate)) : null
// )

export class GameStore {
  @observable hunger;
  @observable happiness;
  @observable dirtiness;

  hungerRate = 5;
  happinessRate = -1;
  dirtinessRate = 3;

  isHungry = false;
  isDirty = false;
  
  constructor(attributes = {}) {
    const {
      hunger,
      happiness,
      dirtiness
    } = attributes;
    this.hunger = hunger || new StatusStore({ name: 'Hunger', percentage: 10, color: 'danger' });
    this.happiness = happiness || new StatusStore({ name: 'Happiness', percentage: 100, color: 'success' });
    this.dirtiness = dirtiness || new StatusStore({ name: 'Dirtiness', percentage: 10, color: 'secondary' });
    reaction(
      () => this.hunger.percentage,
      () => this.checkHunger()
    );
    reaction(
      () => this.dirtiness.percentage,
      () => this.checkDirtiness()
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
    if (this.dirtiness.percentage === 100 && !this.isDirty){
      this.happinessRate = this.happinessRate + -(this.dirtinessRate)
      this.isDirty = true;
    } else if (this.dirtiness.percentage < 100 && this.isDirty) {
      this.happinessRate = this.happinessRate + this.dirtinessRate;
      this.isDirty = false;
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

}

export default new GameStore();
