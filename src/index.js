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
// append start stop button to body 
output.appendChild(startStopButton())

// start btn event handler
startBtnEventHandler()

// function to handle form submit
function submitBtnEventHandler() {

    document.addEventListener("DOMContentLoaded", () => {
    
        function handleFormSubmit(event) {
            event.preventDefault();
            
            removeTaskItemsFromContainer();
            
            // get form input values
            const input1 = document.getElementById('description');
            const description = input1.value;
            const input2 = document.getElementById('project');
            const project = input2.value;
            const startTime = getCurrentHourAndMinute();
        
        // create new task object
        const task = createTaskObject(description,project, startTime)
        // addTaskToAnArray(task,allTasksArray)
        allTasksArray.addItem(task)
            
            updateTasksContainer(allTasksArray.getArray())
        
        
        input1.value = '';
        input2.value = '';
        
        
        closeDialog();
        // console.log(allTasksArray.getArray());
        
            }
          document.getElementById('my-form').addEventListener("submit", handleFormSubmit)
            
        })
    
    }
submitBtnEventHandler()
function test() {
// event listener and handler for updating task elements
document.addEventListener("DOMContentLoaded", () => {
// get the task item elements
const taskElements = document.getElementsByClassName('task-item-element')
// loop through task elements 
for (let i = 0; i < taskElements.length; i++) {
const taskElement = taskElements[i];
taskElement.addEventListener("click", (event) => {
    const parentId = event.target.parentNode.id;
    alert(parentId)

})
    
}

})

}
test()


