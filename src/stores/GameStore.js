import { action, observable } from "mobx";
import StatusStore from './StatusStore';

export class GameStore {
  @observable health;
  @observable happiness;
  @observable dirtiness;
  
  constructor(attributes = {}) {
    const {
      hunger,
      happiness,
      dirtiness
    } = attributes;
    this.hunger = hunger || new StatusStore({ statusName: 'Hunger', statusPercentage: 0 });
    this.happiness = happiness || 100;
    this.dirtiness = dirtiness || 0;
  }
}
