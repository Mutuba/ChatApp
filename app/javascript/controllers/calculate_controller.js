import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["addend", "currentValue"];

  add() {
    const newValue = this.currentValue + this.addend;
    this.currentValueTarget.textContent = newValue;
  }

  subtract() {
    const newValue = this.currentValue - this.addend;
    this.currentValueTarget.textContent = newValue;
  }

  get currentValue() {
    return parseInt(this.currentValueTarget.textContent);
  }
  get addend() {
    const addend = this.addendTarget.value;

    return addend == "" ? 0 : parseInt(this.addendTarget.value);
  }
}
