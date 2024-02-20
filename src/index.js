import './style.css'
import {
    startBtnEventHandler,
    taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,
getCurrentHourAndMinute,
removeTaskItemsFromContainer,
updateTaskElements,
updateTasksContainer,
closeDialog,
updateFormDialog,
closeCreateDialog,
closeUpdateDialog,
openUpdateFormDialog,

} from './user-interface'

// import object related modules
import {
createTaskObject,
    addTaskToAnArray,
    createArrayFactory,
    

} from './task-object-component'


const allTasksArray = createArrayFactory();
allTasksArray.addItem(
            {
            description: 'build task item component',
            project: 'Javascript',
            timeSpent: getCurrentHourAndMinute(),
    
        }
);
allTasksArray.addItem(
                {
                description: 'build to do task app',
                project: 'Javascript',
                timeSpent: getCurrentHourAndMinute(),
            }
)


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild(taskItemsContainer())
// append task items to task items container
output.appendChild(createTaskItem(allTasksArray.getArray()))
// append form to html
output.appendChild(createFormDialog())
output.appendChild(updateFormDialog())
// append start stop button to body 
output.appendChild(startStopButton())

// start btn event handler
startBtnEventHandler()

// event handler for updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {
const currentTask = allTasksArray.downShiftIdToArrayIndex(event.target.parentNode.id)
allTasksArray.setCurrentTaskIndex(currentTask)

openUpdateFormDialog()
populateFormInputs(currentTask)

    }
})
}
updateTaskElementEventHandler()

// function to handle form submit

        function handleCreateFormSubmit(event) {
            event.preventDefault();
            
            removeTaskItemsFromContainer();
            
            // get form input values
            const input1 = document.getElementById('create-description');
            const description = input1.value;
            const input2 = document.getElementById('create-project');
            const project = input2.value;
            const startTime = getCurrentHourAndMinute();
        
        // create new task object
        const task = createTaskObject(description,project, startTime)
        // addTaskToAnArray(task,allTasksArray)
        allTasksArray.addItem(task)
        alert('creation event handler')
            
            updateTasksContainer(allTasksArray.getArray())
        
        input1.value = '';
        input2.value = '';        

        closeCreateDialog();
                
            }
        

            // event handler for submit update
            function handleUpdateFormSubmit(event) {
                event.preventDefault();
            
                removeTaskItemsFromContainer();
                
                // get form input values
                const input1 = document.getElementById('update-description');
                const description = input1.value;
                const input2 = document.getElementById('update-project');
                const project = input2.value;
                const startTime = getCurrentHourAndMinute();
            
// update task object
const currentTaskIndex = allTasksArray.getCurrentTaskIndex();
allTasksArray.getArrayItem(currentTaskIndex).description = description;
allTasksArray.getArrayItem(currentTaskIndex).project = project;
alert('update event handler')

        updateTasksContainer(allTasksArray.getArray())
            
            input1.value = '';
            input2.value = '';        
    
            closeUpdateDialog();
            
                }


// attatch event listener and handler to create and update form submit    
    const createForm =document.getElementById('create-form');
    createForm.addEventListener("submit", handleCreateFormSubmit)    
    const updateForm = document.getElementById('update-form');
updateForm.addEventListener("submit", handleUpdateFormSubmit)
    
// function to populate form dialog with clicked task
function populateFormInputs(arrayIndex) {
let input1 = document.getElementById('update-description');
input1.value = allTasksArray.getArrayItem(arrayIndex).description;

let input2 = document.getElementById('update-project');
input2.value = allTasksArray.getArrayItem(arrayIndex).project;

console.log(allTasksArray.getArray());
}

// event handler for closing create form dialog
function closeCreateFormDialog() {
    const element = document.getElementById('create-close');
    element.addEventListener('click', () => {
closeCreateDialog();
    })
}
closeCreateFormDialog();

// event handler for closing update form dialog
function closeUpdateFormDialog() {
    const element = document.getElementById('update-close');
    element.addEventListener('click', () => {
closeUpdateDialog();
    })
}
closeUpdateFormDialog();

// event handler for deleting a task object
const deleteButton = document.getElementById('update-delete');
deleteButton.addEventListener('click', (event) => {

    removeTaskItemsFromContainer();
allTasksArray.deleteTaskObject(1)

updateTasksContainer(allTasksArray.getArray())



})
