const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();


import './style.css'
import {
    taskItemsArray,
    taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,
getCurrentHourAndMinute,


} from './user-interface'

// import object related modules
import {

    createTask,
    addTaskToAllTasksArray,
    

} from './task-object-component'


let allTasksArray = [
        {
            description: 'build task item component',
            project: 'Javascript',
            timeSpent: currentHour + currentMinute,
    
        },
            {
                description: 'build to do task app',
                project: 'Javascript',
                timeSpent: currentHour + ':' + currentMinute,
            }
    
    
    ];







// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild(taskItemsContainer())
// append task items to task items container
output.appendChild(createTaskItem(allTasksArray))
// append start stop button to body 
output.appendChild(startStopButton())

// click event listener for start button
const btn = document.getElementById('start-stop-button')
btn.addEventListener('click', handleClick)

function handleClick() {
    output.appendChild(createFormDialog())
    openFormDialog();
    // const task = createTask('','', getCurrentHourAndMinute());
    // addTaskToAllTasksArray(task)
}

// function to handle form submit
function handleFormSubmit(event) {
    event.preventDefault();
    
    // get form input values
    const description = document.getElementById('description').value;
    const project = document.getElementById('project').value;
    
    // create new task objects with form input values
    const taskObject = new Task(description,project)
    addTaskToAllTasksArray(taskObject)
    
    
    
    }
    
