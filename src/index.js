import './style.css'
import {
    taskItemsArray,
    taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,
getCurrentHourAndMinute,
removeTaskItemsFromContainer,
updateTaskElements,
updateTasksContainer,


} from './user-interface'

// import object related modules
import {
createTask,
    addTaskToAnArray,
    

} from './task-object-component'


let allTasksArray = [
        {
            description: 'build task item component',
            project: 'Javascript',
            timeSpent: getCurrentHourAndMinute(),
    
        },
            {
                description: 'build to do task app',
                project: 'Javascript',
                timeSpent: getCurrentHourAndMinute(),
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
    removeTaskItemsFromContainer();
    
    const task = createTask('Dynamically generated','', getCurrentHourAndMinute());
    addTaskToAnArray(task, allTasksArray)

        updateTasksContainer(allTasksArray)



    console.log(allTasksArray);
}

// function to handle form submit
function handleFormSubmit(event) {
    event.preventDefault();
    
    // get form input values
    const description = document.getElementById('description').value;
    const project = document.getElementById('project').value;
    
    // create new task objects with form input values
    // const taskObject = new Task(description,project)
    // addTaskToAllTasksArray(taskObject)
    
    
    
    }
    
