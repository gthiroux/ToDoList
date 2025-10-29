import Task from "./Task.js";

export default class Appoitment extends Task {
  date;
  /** Création de la tâche Appointment à partir de Task  */
  constructor(data) {
    /** Héritage de Task */
    super(data);
    this.date = data.opt.date;
  }
}
