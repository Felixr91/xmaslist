import ListitemController from "./components/listitem-controller.js";

console.log("Neat this is my app")

class App {
  constructor() {
    this.controllers = {
      listitemController: new ListitemController()
    }
  }
}

// @ts-ignore
window.app = new App()