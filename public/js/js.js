var TaskList = function() {
  if (!localStorage.tasks) {
    localStorage.tasks = "[]";
  }

  var tasks = JSON.parse(localStorage.tasks);
  var ul = document.getElementById("tasks");

  var renderTasks = function() {
    ul.innerHTML = "";
    tasks.forEach(function(task, index) {
      var li = document.createElement("li");

      li.innerHTML = task;
      li.id = index;
      li.onclick = deleteTask;

      ul.appendChild(li);
    })
  };

  var deleteTask = function() {
    tasks.splice(this.id, 1);
    localStorage.tasks = JSON.stringify(tasks);

    renderTasks();
  };

  renderTasks();

  return {
    addTask: function(task) {
      tasks.push(task);
      localStorage.tasks = JSON.stringify(tasks);

      renderTasks();
    }
  };
};

task = new TaskList();

document.getElementById("form-input").addEventListener("click", function() {
  var newTask = document.getElementById("form");
  task.addTask(newTask.value);
  newTask.value = "";
});
