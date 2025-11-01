export default class Task {
  static idCount = 1;

  id;
  name;
  checked = false;
  checkbox;
  deleted;
  modification;
  buttonModify;
  inputModify;

  /**Construction of task */
  constructor(data) {
    this.id = data.id;
    Task.idCount++;
    this.name = data.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;
    /** Ecoute de la checkbox pour savoir si elle est cliqué ou non  */
    checkbox.addEventListener("click", () => this.toggle());

    const inputModify = document.createElement("input");
    inputModify.setAttribute("type", "text");
    inputModify.setAttribute("placeholder", "Tapez votre modification ici");
    this.inputModify = inputModify;
    inputModify.hidden = true;

    const validateModification = document.createElement("button");
    validateModification.textContent = "Valider la modification";
    validateModification.setAttribute("id", "validateModification");
    validateModification.type = "submit";
    this.buttonModify = validateModification;
    validateModification.hidden = true;
  }
  /** If the checkbox is checked then the value of checked take the opposite*/
  toggle = () => (this.checked = !this.checked);
}
