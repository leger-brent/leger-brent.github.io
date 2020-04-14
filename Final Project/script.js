window.onload = function () {
    let taskInput = document.getElementById("newTask");//Add a new task.
    let addButton = document.getElementsByTagName("button")[0];//first button
    let incompleteTaskHolder = document.getElementById("toDo");//ul of #incomplete-tasks
    let completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks
    let xhttp = new XMLHttpRequest();
    let sesStorage = Date.now().toString();

    let createNewTaskElement = function (taskString) {

        let listItem = document.createElement("li");
        let checkBox = document.createElement("input");
        let label = document.createElement("label");
        let deleteButton = document.createElement("button");
        label.innerText = taskString;

        checkBox.type = "checkbox";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        return listItem;
    }

    let addTask = function () {
        if (taskInput.value != "") {

            console.log("Add Task...");
            let listItem = createNewTaskElement(taskInput.value);
            if (listItem != null)
                incompleteTaskHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);
            taskInput.value = "";
        }
    }

    let deleteTask = function () {
        console.log("Delete Task...");
        let listItem = this.parentNode;
        let ul = listItem.parentNode;
        ul.removeChild(listItem);

    }


    let taskCompleted = function () {
        console.log("Complete Task...");
        let listItem = this.parentNode;
        completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
    }

    let taskIncomplete = function () {
        console.log("Incomplete Task...");
        let listItem = this.parentNode;
        incompleteTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
    }

    addButton.addEventListener("click", addTask);

    let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
        console.log("bind list item events");
        let checkBox = taskListItem.querySelector("input[type=checkbox]");
        let deleteButton = taskListItem.querySelector("button.delete");

        deleteButton.onclick = deleteTask;
        checkBox.onchange = checkBoxEventHandler;
    }

    for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
        bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
    }

    for (let i = 0; i < completedTasksHolder.children.length; i++) {
        bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }

    xhttp.onreadystatechange = function () {
        //watches for when the ready state is 4 and status code is 200. Essentially this is a successful response.
        if (this.readyState == 4 && this.status == 200) {

            let parsed = JSON.parse(xhttp.responseText);
            console.log(parsed);
            let stringified = JSON.stringify(parsed);
            sessionStorage.setItem(sesStorage, stringified);
        }


    };
    xhttp.open("Get", "https://quotes.rest/qod?category=inspire&language=en", true);
    xhttp.send();

    document.getElementById("hideCompleted").addEventListener("click", function () {
        let i = document.getElementById("completed-tasks");
        if (i.style.display === 'none') {
            i.style.display = 'block';
        } else {
            i.style.display = 'none';
        }
    });

    let h = document.getElementById("head");
    h.classList.toggle("headerClass")


}