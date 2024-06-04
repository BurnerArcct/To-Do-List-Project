document.getElementById('add-task').addEventListener('click', function() {
    var taskInput = document.getElementById('new-task');
    var task = taskInput.value;
    if (task) {
        var li = document.createElement('li');
        li.textContent = task;
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});
