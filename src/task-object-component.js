class Task {
constructor(description,project,startTime) {
    this.description = description
    this.project = project
    this.startTime = startTime
}    
}
let allTasksArray = [];

function createTask(description,project,startTime) {
    const task = new Task(description,project,startTime)
    addTaskToAllTasksArray(task)
    return task
}
function addTaskToAllTasksArray(object) {
    allTasksArray.push(object)
}

createTask('Blablah', 'JS', new Date())
console.log(allTasksArray);
