export default class Interface {
  static listHTML = document.getElementById("taskList");

  static handlerCreateTask(handler) {
    /**Récupération des données venant de l'HTML */
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");
    var id = 1;
    /** Ecoute sur l'input des tâches */
    newTaskValidate.addEventListener("click", () => {
      /** Création d'un objet data qui regroupe toutes les informations nécessaires pour les tratier avec d'autres fonctions */
      const data = {
        id: id,
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      id++;
      newTaskName.value = "";
      /**fonction callback dans App.js qui renvoie data */
      handler(data);
    });
  }
  /** Fonction d'affichage des tâches en créant le HTML nécessaire */
  static displayTasks(tasks, onDelete, onModification) {
    Interface.listHTML.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      const div = document.createElement("div");
      div.setAttribute("id", "task" + task.id);
      li.appendChild(div);

      div.appendChild(task.checkbox);

      const index = document.createElement("p");
      index.classList.add("indexTasks");
      index.textContent = "#" + task.id;
      div.appendChild(index);

      const p = document.createElement("p");
      p.setAttribute("id", "nameTask" + task.id);
      p.textContent = task.name;
      div.appendChild(p);

      /**
       * Creation of the button delete to delete the task(this) thanks to the function onDelete()
       */
      const modified = document.createElement("button");

      const imageModified = document.createElement("img");
      imageModified.src = "./assets/img/pen.png";
      modified.classList.add("modification");
      task.modification = modified;
      modified.appendChild(imageModified);

      li.appendChild(modified);
      modified.addEventListener("click", () => onModification(task));
      /**
       * Creation of the button delete to delete the task(this) thanks to the function onDelete()
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
