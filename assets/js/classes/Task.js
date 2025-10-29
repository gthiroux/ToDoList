export default class Task {
  static idCount = 1;

  id;
  name;
  checked = false;
  checkbox;
  /**Construction d'une tâche */
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
  /** Lors du clic de la checkbox, on change la valeur de checked (par défaut à false) en son contraire */
  toggle = () => (this.checked = !this.checked);
}
