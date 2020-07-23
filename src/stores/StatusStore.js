import { action, observable } from "mobx";

export class StatusStore {
  @observable statusName;
  @observable statusColor;
  @observable statusPercentage;
  
  constructor(attributes = {}) {
    const {
      statusName,
      statusColor,
      statusPercentage
    } = attributes;
    this.hunger = statusName || 'status';
    this.happiness = statusColor || 'success';
    this.dirtiness = statusPercentage || 100;
  }
}
