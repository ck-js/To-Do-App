import {
format, setDayOfYear, startOfQuarter
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
createProjectFilterSelect,

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
// output.appendChild(createTaskItem(allTasksArray.getArray()))
// append form to html
output.appendChild(createFormDialog())
output.appendChild(updateFormDialog())
output.appendChild(createProjectFormDialog())


// append start stop button to body 
output.appendChild(startStopButton())

// append project filter feature to dom
output.appendChild(createProjectFilterSelect())

// start btn event handler
startBtnEventHandler()

console.log(JSON.parse(localStorage.getItem('allTasks')));

// event handler for initiating updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {

const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
const storedData = localStorage.getItem('allTasks')
const dataArray = JSON.parse(storedData);
const selectedObject = dataArray[shiftedIndex];

// set the current task object index value to local storage
localStorage.setItem('currentTask', shiftedIndex)

// retrieve local storage values to populate dom elements 
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
        const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        const selectedObject = dataArray[shiftedIndex];

        // set value to key of object in array
        if (selectedObject.startTime){
        const endTimeValue = new Date().getTime();
        selectedObject.endTime = endTimeValue;

        // get start and end time in milliseconds and push to array
const elapsedTime = selectedObject.endTime - selectedObject.startTime;
selectedObject.msArray.push(elapsedTime);
console.log(elapsedTime);
        
selectedObject.startTime = null;

// sum up milliseconds items in ms array
let totalMilliseconds = 0;
for (let i = 0; i < selectedObject.msArray.length; i++) {
    totalMilliseconds += selectedObject.msArray[i];
    
}
// set result to object property
selectedObject.spentTime = totalMilliseconds;
alert(totalMilliseconds);

// display result on dom element 
const previousSibling = event.target.previousSibling;
previousSibling.textContent = totalMilliseconds;
console.log(previousSibling);

        }
        event.target.textContent = 'Start';
        
       // convert array back into string
       const updatedArrayString = JSON.stringify(dataArray)
       
       // store the updated array back into local storage
       localStorage.setItem('allTasks', updatedArrayString)
       
       console.log(selectedObject);
       console.log(dataArray);

       updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))

// when we click update task element it populates the form element with the corresponding task from the local stroage object.
// but for some reason if we close the form dialog it will change the text content of description to stop or start 
// we want the start button to reset the corresponding task object with null 
// then set the start time key value to a new date method
// the stop button adds new date to the end time key value 
// it then does some operations and calculations such as
// store the difference in end and start time in milliseconds of the current key values
// push the milliseconds value to the ms array 
// loop through ms array and sum up all items 
// store or update total time in milliseconds
// get total time in milliseconds and convert to total seconds 
// format total seconds into hour hour minute minute second second format
// display formatted total time in the dom element
// call function to repopulate the task items container with updated task elements

    } else {
        // convert element id to array index value
        const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        const selectedObject = dataArray[shiftedIndex];

        // set value to key of object in array
const startTime = new Date().getTime();
 selectedObject.startTime = startTime;

// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)

// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

console.log(selectedObject);
console.log(dataArray);

        event.target.textContent = 'Stop';
        
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
                
// get index of current task
const currentTask = localStorage.getItem('currentTask')

// update the task object in local sstorage
        
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        const selectedObject = dataArray[currentTask];

        alert(currentTask)
        // set input values to local storage
 selectedObject.description = description;
 selectedObject.project = project;

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
    const currentTask = localStorage.getItem('currentTask');
    const storedData = localStorage.getItem('allTasks')
    const dataArray = JSON.parse(storedData);
    const selectedObject = dataArray[currentTask];
// remove object from array
dataArray.splice(currentTask,1)
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
updateTasksContainer(JSON.parse(localStorage.allTasks))

// function to start timer that takes object as argument
function startTimer(object) {

}

// event listener and handler for project filter feature
const projectFilterSelect = document.getElementById('project-filter-container')
function handleProjectFilterSelect() {
    
    // get select element
const selectElement = document.getElementById('project-filter')
// remove children option elements 
for (let i = selectElement.children.length -1; i >= 1; i--) {
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
    if (allTasksArray[i].project === selectedItem) {
        filteredObjects.push(allTasksArray[i])
    }
console.log(filteredObjects);
removeTaskItemsFromContainer();
updateTasksContainer(filteredObjects)
}


    
    });


// clearLocalStorage()



console.log(JSON.parse(localStorage.allTasks));