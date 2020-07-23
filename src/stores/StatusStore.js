import { observable } from "mobx";

export default class StatusStore {
  @observable name;
  @observable color;
  @observable percentage;
  
  constructor(attributes = {}) {
    const {
      name,
      percentage,
      color
    } = attributes;
    this.name = name || 'status';
    this.percentage = percentage;
    this.color = color || 'success';
  }
}
