import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["output"];
  connect() {
    // this.element.textContent = "Hello Stimulus!";
    this.outputTarget.textContent = "Hello from Stimulus";
  }
}
