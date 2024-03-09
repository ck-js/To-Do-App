import {
format, setDayOfYear
} from 'date-fns'

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
createProjectFormDialog,
openCreateProjectFormDialog,
closeCreateProjectDialog,

} from './user-interface'

// import object related modules
import {
createTaskObject,
    addTaskToAnArray,
    createArrayFactory,
    downShiftIdToArrayIndex,
    
} from './task-object-component'


const allTasksArray = createArrayFactory();
// allTasksArray.addItem(
//             {
//             description: 'build task item component and write a really long description so that we can see what the affect will be',
//             project: 'Javascript',
//             timeSpent: '00:28:23',
//             msArray: [],
    
//         }
// );
// allTasksArray.addItem(
//                 {
//                 description: 'build to do task app',
//                 project: 'Javascript',
//                 timeSpent: '00:43:22',
//             }
// )


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild(taskItemsContainer())
// append task items to task items container
output.appendChild(createTaskItem(allTasksArray.getArray()))
// append form to html
output.appendChild(createFormDialog())
output.appendChild(updateFormDialog())
output.appendChild(createProjectFormDialog())

// append start stop button to body 
output.appendChild(startStopButton())

// start btn event handler
startBtnEventHandler()

// event handler for initiating updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {
// const currentTask = allTasksArray.downShiftIdToArrayIndex(event.target.parentNode.id)
// const currentTask = JSON.parse(localStorage.allTasks[downShiftIdToArrayIndex(event.target.parentNode.id)])
// allTasksArray.setCurrentTaskIndex(currentTask)
const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
const storedData = localStorage.getItem('allTasks')
const dataArray = JSON.parse(storedData);
const selectedObject = dataArray[shiftedIndex];


const description = document.getElementById('update-description');
description.value = selectedObject.description
const project = document.getElementById('update-project');
project.value = selectedObject.project;


openUpdateFormDialog()
// populateFormInputs(currentTask)
// console.log(currentTask);
    }
    if (event.target.matches('.task-component') &&
    event.target.textContent === 'Stop') {

        removeTaskItemsFromContainer()

        const currentTask = allTasksArray.downShiftIdToArrayIndex(event.target.parentNode.id)
        allTasksArray.setCurrentTaskIndex(currentTask)
event.target.textContent = 'Start'

        // call the current task to stop timer
allTasksArray.stop(currentTask)
// set the current elapsed time to ms array
const elapsedTime = allTasksArray.elapsed(currentTask);
allTasksArray.getArrayItem(currentTask).msArray.push(elapsedTime);
// set the spent time property the sum of ms array items
const totalMilliseconds = allTasksArray.getFormattedSpentTime(currentTask);
allTasksArray.getArrayItem(currentTask).timeSpent = totalMilliseconds;

updateTasksContainer(allTasksArray.getArray())

        console.log(allTasksArray.getArray());    

    } else {
        const currentTask = allTasksArray.downShiftIdToArrayIndex(event.target.parentNode.id)
        allTasksArray.setCurrentTaskIndex(currentTask)
        
        event.target.textContent = 'Stop';


        // call the current task to start timer
        allTasksArray.start(currentTask)
        

        console.log(allTasksArray.getArray());    
    }
})
}
updateTaskElementEventHandler()

// function to add object to local storage array
function addObjectToLocalStorageArray(key, object) {
    // checks if key exists in storage or creates one with empty array
    // and stores it in a variable
const existingArray = JSON.parse(localStorage.getItem(key)) || [];
// push the object to an array in storage
existingArray.push(object);
// set the array with new object in key of storage 
localStorage.setItem(key, JSON.stringify(existingArray))

}

// function to handle form submit
        function handleCreateFormSubmit(event) {
            event.preventDefault();

            // clear the dom
            removeTaskItemsFromContainer();
            
            // get form input values
            const input1 = document.getElementById('create-description');
            const description = input1.value;
            const input2 = document.getElementById('create-project');
            const project = input2.value;
            // const startTime = getCurrentHourAndMinute();
        
        // create new task object
        const task = createTaskObject(description,project)
        // addTaskToAnArray(task,allTasksArray)
        // allTasksArray.addItem(task)
        // localStorage.setItem('allTasksArray', JSON.stringify(task))
addObjectToLocalStorageArray('allTasks', task)

console.log(JSON.parse(localStorage.getItem('allTasks')));

        alert('creation event handler')
            
        // update dom with new task
            // updateTasksContainer(allTasksArray.getArray())
            updateTasksContainer(JSON.parse(localStorage.allTasks))
        
            // reset form inputs
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
input1.value = localStorage.getItem(allTasks)[arrayIndex].description;

let input2 = document.getElementById('update-project');
input2.value = localStorage.getItem(allTasks)[arrayIndex].project;

console.log(localStorage.getItem(allTasks[arrayIndex]));
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
    const currentTask = allTasksArray.getCurrentTaskIndex();

allTasksArray.deleteTaskObject(currentTask)

updateTasksContainer(allTasksArray.getArray())
closeUpdateDialog()

})



// function to check if storage is available 
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log('Yippee');
  } else {
    // Too bad, no localStorage for us
    console.log('Nuppee');
  }
  
  
// select option form dropdown implementation 

const selectElement = document.getElementById('create-project')
const projectOptions = ['Javascript', 'Python', 'Ruby']

function setProjectOptions() {
projectOptions.forEach(projectOption => {
const optionElement = document.createElement('option')
optionElement.value = projectOption;
optionElement.text = projectOption;

selectElement.appendChild(optionElement)
});
}

selectElement.addEventListener('change', (event) => {
const selectedElement = event.target.value;
if (selectedElement === 'create-project'){
    alert(selectedElement)
openCreateProjectFormDialog()

}

})
// handle create project form submit
const createProjectForm = document.getElementById('create-project-form')
createProjectForm.addEventListener('submit', (event) => {
event.preventDefault();
const projectNameInput = document.getElementById('create-create-project-name').value;
projectOptions.push(projectNameInput)
// call function to update project options 
setProjectOptions();

closeCreateProjectDialog()

})
setProjectOptions();

// function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
    
}
// clearLocalStorage()

// call on page load to display tasks in local storage
// updateTasksContainer(JSON.parse(localStorage.allTasksArray))
updateTasksContainer(JSON.parse(localStorage.allTasks))
