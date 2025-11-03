export default class Interface {
  static listHTML = document.getElementById("taskList");
  static validateListHTML = document.getElementById("checkedTaskList");

  static handlerCreateTask(handler) {
    /**Récupération des données venant de l'HTML */
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");

    var id = 1;
    var indexTasks = 1;
    /** Ecoute sur l'input des tâches */
    newTaskValidate.addEventListener("click", () => {
      /** Création d'un objet data qui regroupe toutes les informations nécessaires pour les tratier avec d'autres fonctions */
      const data = {
        id: id,
        index: indexTasks,
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      indexTasks++;
      id++;
      newTaskName.value = "";
      /**fonction callback dans App.js qui renvoie data */
      handler(data);
    });
  }
  /** Fonction d'affichage des tâches en créant le HTML nécessaire */
  static displayTasks(tasks, onDelete, onModification, onToggle) {
    Interface.listHTML.innerHTML = "";
    Interface.validateListHTML.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");

      const divTask = document.createElement("div");
      divTask.classList.add("listTask");

      const div = document.createElement("div");
      div.setAttribute("id", "task" + task.id);

      div.appendChild(task.checkbox);
      /** Ecoute de la checkbox pour savoir si elle est cliqué ou non  */
      task.checkbox.addEventListener("click", () => onToggle(task));

      const index = document.createElement("p");
      index.classList.add("indexTasks");
      index.textContent = "#" + task.index;
      div.appendChild(index);

      div.appendChild(task.date);

      const p = document.createElement("p");
      p.setAttribute("id", "nameTask" + task.id);
      p.textContent = task.name;
      div.appendChild(p);

      divTask.appendChild(div);
      /**
       * Creation of the button modification to modify the task(this) thanks to the function onModification()
       */
      const modified = document.createElement("button");

      const imageModified = document.createElement("img");
      imageModified.src = "./assets/img/pen.png";
      modified.classList.add("modification");
      task.modification = modified;

      modified.appendChild(imageModified);
      divTask.appendChild(modified);

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
      divTask.appendChild(deleted);

      deleted.addEventListener("click", () => onDelete(task));

      li.appendChild(divTask);

      /** Modification element  */
      const divModification = document.createElement("div");
      divModification.setAttribute("id", "divModification");

      divModification.appendChild(task.inputModify);

      divModification.appendChild(task.buttonModify);

      li.appendChild(divModification);

      if (task.checked == true) {
        Interface.validateListHTML.appendChild(li);
      } else {
        Interface.listHTML.appendChild(li);
      }
    });
  }
}
