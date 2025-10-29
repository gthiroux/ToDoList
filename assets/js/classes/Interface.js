export default class Interface {
  static listHTML = document.getElementById("taskList");

  static handlerCreateTask(handler) {
    /**Récupération des données venant de l'HTML */
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");
    /** Ecoute sur l'input des tâches */
    newTaskValidate.addEventListener("click", () => {
      /** Créaation d'un objet data qui regroupe toutes les informations nécessaires pour les tratier avec d'autres fonctions */
      const data = {
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      /**fonction callback dans App.js qui renvoie data */
      handler(data);
    });
  }
/** Fonction d'affichage des tâches en créant le HTML nécessaire */
  static displayTasks(tasks) {
    Interface.listHTML.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      li.appendChild(task.checkbox);

      const p = document.createElement("p");
      p.textContent = task.name;
      li.appendChild(p);

      Interface.listHTML.appendChild(li);
    });
  }
}
