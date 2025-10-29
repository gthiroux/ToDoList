/** Importation des classes Appointment, Interface et Task */
import Appoitment from "./Appoitment.js";
import Interface from "./Interface.js";
import Task from "./Task.js";

export default class App {
  tasks = [];

  constructor() {
    /**Récupération des informations sous forme d'objet des tâches dans l'interface */
    Interface.handlerCreateTask((data) => {
      if (data.type == "simple") {
        /** Création d'un objet Task de type simple */
        this.tasks.push(new Task(data));
      } else if (data.type == "appointment") {
        /** Création d'un objet Task de type rendez-vous */
        this.tasks.push(new Appoitment(data));
      }
      /** Affichage de la tâche */
      Interface.displayTasks(this.tasks, (task) => this.delete(task));
    });
  }

  delete = (task) => {
    const indexThis = this.tasks.indexOf(task);
    this.tasks.splice(indexThis, 1);
    Interface.displayTasks(this.tasks);
  };
}
