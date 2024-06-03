import {
format, differenceInDays
} from 'date-fns'

import './style.css'
import {
    startBtnEventHandler,
    taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,

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
createProjectFilterSelect,

} from './user-interface'

// import object related modules
import {
createTaskObject,
    addTaskToAnArray,
    createArrayFactory,
    downShiftIdToArrayIndex,
    
} from './task-object-component'

// all dom related functions go here
// append task items container to output
const body = document.body;
const output = document.getElementById('output')

output.appendChild(taskItemsContainer())

// append project filter feature to dom
output.appendChild(createProjectFilterSelect())
// append start stop button to body 
body.appendChild(startStopButton())
// append form to html
body.insertBefore(createFormDialog(), output)
body.appendChild(updateFormDialog())
body.appendChild(createProjectFormDialog())




// start btn event handler
startBtnEventHandler()

console.log(JSON.parse(localStorage.getItem('allTasks')));

// event handler for initiating updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')

parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {
// const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
const domTaskId = +event.target.parentNode.id;
alert(domTaskId + ' is the id key')

const storedData = localStorage.getItem('allTasks')
const dataArray = JSON.parse(storedData);
// const selectedObject = dataArray[shiftedIndex];
const selectedObject = dataArray.find(obj => obj.id === domTaskId)

// set the current task object index value to local storage
localStorage.setItem('currentTask', domTaskId)

// retrieve local storage values to populate dom elements 
const description = document.getElementById('update-description');
description.value = selectedObject.description
const project = document.getElementById('update-project');
project.value = selectedObject.project;
const date = document.getElementById('update-date');
date.value = selectedObject.dueDate;


openUpdateFormDialog()

    }

    if (event.target.matches('.task-component') &&
    event.target.textContent === 'true') {

        // const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
        const domTaskId = +event.target.parentNode.id;

        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        // const selectedObject = dataArray[shiftedIndex];
        const selectedObject = dataArray.find(obj => obj.id === domTaskId);
        
selectedObject.isComplete = false;
// event.target.textContent = 'false'

// Update the dataArray with the modified selectedObject
// dataArray[] = selectedObject;
let index = dataArray.findIndex(obj => obj.id === domTaskId) 
dataArray[index] = selectedObject;

// Stringify the dataArray and store it back into localStorage
localStorage.setItem('allTasks', JSON.stringify(dataArray));

removeTaskItemsFromContainer();
updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')));

    } 
    if (event.target.matches('.task-component') &&
    event.target.textContent === 'false') {
        const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
        const domTaskId = +event.target.parentNode.id;
        
        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        // const selectedObject = dataArray[shiftedIndex];
const selectedObject = dataArray.find(obj => obj.id === domTaskId)


selectedObject.isComplete = true;
// event.target.textContent = 'true'

// Update the dataArray with the modified selectedObject
// dataArray[shiftedIndex] = selectedObject;
let index = dataArray.findIndex(obj => obj.id === domTaskId) 
dataArray[index] = selectedObject;

// Stringify the dataArray and store it back into localStorage
localStorage.setItem('allTasks', JSON.stringify(dataArray));

removeTaskItemsFromContainer();
updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')));


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
            const input3 = document.getElementById('create-date');
            const date = input3.value;

            const daysLeft = daysLeftUntilDueDate(date)



        // create new task object
        const task = createTaskObject(description,project, date)
        // task.daysLeft = daysLeft;

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
                const input3 = document.getElementById('update-date');
                const date = input3.value;
const daysLeft = daysLeftUntilDueDate(date)
// get id of current task
const currentTaskId = localStorage.getItem('currentTask')

// update the task object in local sstorage
        
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        // const selectedObject = dataArray[currentTask];
        const selectedObject = dataArray.find(obj => obj.id === +currentTaskId)

        // set input values to local storage
 selectedObject.description = description;
 selectedObject.project = project;
    selectedObject.dueDate = date;
    selectedObject.daysLeft = daysLeft;

    
// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)

// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

console.log(selectedObject);
console.log(dataArray);


alert('update event handler')

        updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))
            
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
    const updateDialog = document.getElementById('update-dialog')
    const element = document.getElementById('update-close');
    element.addEventListener('click', () => {
        
closeUpdateDialog();
alert('update close event handler')
    })
// rule for escape key event 
updateDialog.addEventListener('keydown', (event) => {
if (event.key === 'Escape' || event.key === 'Esc') {
    event.preventDefault();
    alert('Escape key was presssed down')
    closeUpdateDialog()
}
// check if event target is click on backdrop
updateDialog.addEventListener('click', (event) => {
if (event.target === updateDialog) {
alert('backdrop clicked')
closeUpdateDialog()

}

})




})



}
closeUpdateFormDialog()

// event handler for deleting a task object
const deleteButton = document.getElementById('update-delete');
deleteButton.addEventListener('click', (event) => {

    removeTaskItemsFromContainer();
    const currentTask = localStorage.getItem('currentTask');
// const domTaskId = event.target.parentNode.id;
alert(currentTask)
    const storedData = localStorage.getItem('allTasks')
    const dataArray = JSON.parse(storedData);
    // const selectedObject = dataArray[currentTask];
    const selectedObject = dataArray.find(obj => obj.id === +currentTask)
// remove object from array
dataArray.splice(selectedObject,1)
console.log(dataArray);

// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)
       
// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

// render dom with updated task objects
updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))


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
updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))

// function to start timer that takes object as argument
function startTimer(object) {

}

// event listener and handler for project filter feature
const projectFilterSelect = document.getElementById('project-filter-container')
function handleProjectFilterSelect() {
    
    // get select element
const selectElement = document.getElementById('project-filter')
// remove children option elements 
for (let i = selectElement.children.length -1; i >= 2; i--) {
const child = selectElement.children[i];
selectElement.removeChild(child)

}

// get local storage array of task objects
const storedData = localStorage.getItem('allTasks')
// convert stringed array to normal array
const dataArray = JSON.parse(storedData);

const uniqueValues = [];
// loop through array object items and output the project value
for (let i = 0; i < dataArray.length; i++) {
let key = dataArray[i].project;

if (!uniqueValues.includes(key)) {

const optionElement = document.createElement('option')
optionElement.value = key;
optionElement.text = key;

selectElement.appendChild(optionElement)
uniqueValues.push(key)

}

}

}
projectFilterSelect.addEventListener('click', handleProjectFilterSelect)
projectFilterSelect.addEventListener('change', (event) => {
// get the value of selected option element
    const selectedItem = event.target.value;

// get the all tasks array
const allTasksArray = JSON.parse(localStorage.getItem('allTasks'))

const filteredObjects = [];
// loop through all tasks array 
for (let i = 0; i < allTasksArray.length; i++) {
    // const currentItem = allTasksArray[i];

    // check if selected item value is all tasks
    if (selectedItem === 'all-tasks') {
        // add all tasks to filter array
        // filteredObjects.push(allTasksArray[i])
        
        removeTaskItemsFromContainer()
        updateTasksContainer(allTasksArray)
    }
if (allTasksArray[i].project === selectedItem) {
        filteredObjects.push(allTasksArray[i])

        removeTaskItemsFromContainer();
updateTasksContainer(filteredObjects)
    }


}


    
    });

function daysLeftUntilDueDate(dueDate) {
    const targetDate = new Date(dueDate);
    const currentDate = new Date();
    const daysLeft = differenceInDays(targetDate, currentDate);

    return daysLeft
}   




// clearLocalStorage()


console.log(JSON.parse(localStorage.allTasks));