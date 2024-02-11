class Task {
constructor(description,project,startTime) {
    this.description = description
    this.project = project
    this.startTime = startTime
}    
}


function createTask(description,project,startTime) {
    const task = new Task(description,project,startTime)
    
    return task
}
function addTaskToAnArray(object, arrayName) {
    arrayName.push(object)
}


export {

createTask,
addTaskToAnArray,



}