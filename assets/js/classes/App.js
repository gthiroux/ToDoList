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
        this.tasks.push(new Appoitment(data));      }
      /** Affichage de la tâche */
      Interface.displayTasks(
        this.tasks,
        (task) => this.delete(task),
        (task) => this.modify(task)
      );
    });
  }

  /** Function delete task */
  delete = (task) => {
    const indexThis = this.tasks.indexOf(task);
    let i = indexThis + 1;

    this.tasks.forEach((task) => {
      if (task.index > i) {
        console.log("i=", i);
        task.index = i;
        console.log("indexTaks", Interface.indexTasks);
        i++;
      }
    });
    Interface.indexTasks = i;
    this.tasks.splice(indexThis, 1);
    Interface.displayTasks(this.tasks, (task) => this.delete(task));
  };

  /**function modify task */
  modify = (task) => {
    task.inputModify.hidden = false;
    task.buttonModify.hidden = false;
    console.log(task.name);

    task.buttonModify.addEventListener("click", () => {
      task.name = task.inputModify.value;
      Interface.displayTasks(
        this.tasks,
        (task) => this.delete(task),
        (task) => this.modify(task)
      );
      task.inputModify.hidden = true;
      task.buttonModify.hidden = true;
    });
  };
}
