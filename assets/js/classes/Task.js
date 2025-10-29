import Interface from "./Interface.js";

export default class Task {
  static idCount = 1;

  id;
  name;
  checked = false;
  checkbox;
  deleted;

  /**Construction of task */
  constructor(data) {
    this.id = Task.idCount;
    Task.idCount++;
    this.name = data.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;
    /** Ecoute de la checkbox pour savoir si elle est cliqué ou non  */
    checkbox.addEventListener("click", () => this.toggle());
  }
  /** If the checkbox is checked then the value of checked take the opposite*/
  toggle = () => (this.checked = !this.checked);
}
