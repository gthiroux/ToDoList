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
      /** Création d'un objet data qui regroupe toutes les informations nécessaires pour les tratier avec d'autres fonctions */
      const data = {
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      newTaskName.value = "";
      /**fonction callback dans App.js qui renvoie data */
      handler(data);
    });
  }
  /** Fonction d'affichage des tâches en créant le HTML nécessaire */
  static displayTasks(tasks, onDelete) {
    Interface.listHTML.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      const div = document.createElement("div");
      li.appendChild(div);

      div.appendChild(task.checkbox);

      const index = document.createElement("p");
      index.classList.add("indexTasks");
      index.textContent = "#" + task.id;
      div.appendChild(index);

      const p = document.createElement("p");
      p.textContent = task.name;
      div.appendChild(p);

      /**
       * Creation of the button delete to delete the task(this) thanks to the function User.delete()
       */
      const deleted = document.createElement("button");

      const imageDelete = document.createElement("img");
      imageDelete.src = "./assets/img/trash.png";
      deleted.classList.add("delete");
      task.deleted = deleted;
      deleted.appendChild(imageDelete);

      li.appendChild(deleted);
      deleted.addEventListener("click", () => onDelete(task));

      Interface.listHTML.appendChild(li);
    });
  }
}
