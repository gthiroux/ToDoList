import Task from "./Task.js";

export default class Appoitment extends Task {
  date;
  /** Création de la tâche Appointment à partir de Task  */
  constructor(data) {
    /** Héritage de Task */
    super(data);
    // const date = data.opt.date;
    // date.format("dd / mm / yyyy");
    // console.log(date);
    const date = document.createElement("p");
    date.textContent = "Pour le " + data.opt.date;
    date.classList.add("dateTask");
    this.date = date;
    date.hidden = false;
  }
}
