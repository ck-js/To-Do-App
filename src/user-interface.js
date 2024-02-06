// get the current time in hours and minutes
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
// array to store task item elements
let taskItemsArray = [
    {
        description: 'build task item component',
        project: 'Javascript',
        timeSpent: currentHour + ':' + currentMinute,

    },
        {
            description: 'build to do task app',
            project: 'Javascript',
            timeSpent: currentHour + ':' + currentMinute,
        }

];

// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'

return container;
}
// create task item
function createTaskItem() {
const taskItemsContainer = document.getElementById(
    'task-items-container');


    for (let i = 0;i < taskItemsArray.length; i++) {
        const item = taskItemsArray[i];
    
        const taskItemElement = document.createElement('div');
        taskItemElement.classList.add('task-item-element')

        const div = document.createElement('div');
        div.classList.add('task-item');
        div.id = 'task-description';
        div.textContent = item.description;
        
        const div2 = document.createElement('div');
        div2.classList.add('task-item');
        div2.id = 'task-project';
        div2.textContent = item.project;
        
        const div3 = document.createElement('div');
        div3.classList.add('task-item');
        div3.id = 'task-time-spent';
        div3.textContent = item.timeSpent;


    
        taskItemElement.appendChild(div)
        taskItemElement.appendChild(div2)
        taskItemElement.appendChild(div3)
        
        taskItemsContainer.appendChild(taskItemElement)
    }
    
    
    return taskItemsContainer;
}

function createDescriptionComponent(description) {
const container = document.createElement('div');
container.classList.add('task-description');
for (let i = 0; i < taskItemsArray.length; i++) {
    const item = taskItemsArray[i];
    
    const div = document.createElement('div');
div.textContent = item.description;

container.appendChild(div)
    
}
return container;
}
// add project component to task item cntainer
function addProjectComponent(project){
    const container = document.createElement('div');
    container.classList.add('task-project');
    for (let i = 0; i < taskItemsArray.length; i++) {
        const item = taskItemsArray[i];
        
        const div = document.createElement('div');
    div.textContent = item.project;
    
    container.appendChild(div)
        
    }
    return container;
    }

export {
taskItemsContainer,
createTaskItem,
createDescriptionComponent,


}