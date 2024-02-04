
// array to store task item elements
let taskItemsArray = ['Task1', 'Task2','Task3'];


// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'

return container;
}
// create task item
function createTaskItem() {
    const container = document.createElement('div')
    for (let i = 0;i < taskItemsArray.length; i++) {
        const item = taskItemsArray[i];
        
        const div = document.createElement('div');
        div.textContent = item;


console.log(item);
        container.appendChild(div)
    }
    return container;


}



export {
taskItemsContainer,
createTaskItem,

}