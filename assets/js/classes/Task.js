export default class Task {
  static idCount = 1;

  id;
  index;
  name;
  checked = false;
  checkbox;
  deleted;
  date;
  modification;
  buttonModify;
  inputModify;

  /**Construction of task */
  constructor(data) {
    this.id = data.id;
    this.index = data.index;
    Task.idCount++;
    this.name = data.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;

    const date = document.createElement("p");
    date.textContent = "";
    this.date = date;
    date.hidden = true;

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
}
