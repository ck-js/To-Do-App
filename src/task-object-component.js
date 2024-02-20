class Task {
constructor(description,project,timeSpent) {
    this.description = description
    this.project = project
    this.timeSpent = timeSpent
    // this.element = document.createElement('div');
    // this.element.addEventListener('click', this.handleClick.bind(this));

}    
// handleClick() {
//     console.log('Object clicked');
// }
// addToDom(targetElement) {
//     targetElement.appendChild(this.element)
// }
}


function createTaskObject(description,project,startTime) {
    const task = new Task(description,project,startTime)
    
    return task
}
function addTaskToAnArray(object, arrayName) {
    arrayName.push(object)
}

function createArrayFactory() {
    const array = [];
    let currentTaskIndex; 

    function getArray() {
        return array;
    }
    function addItem(item) {
        array.push(item);
    }
    function downShiftIdToArrayIndex(id) {
        const element = id;
        let shiftedId = parseInt((element) -1);

return shiftedId;
    }
function getArrayItem(index) {
    return array[index]
}
// function to update task object by array index
// function updateCurrentTaskObject(index) {
//  array[0].description = 'you changed';

// }
function setCurrentTaskIndex(index) {
    currentTaskIndex = index;
}
function getCurrentTaskIndex() {
    return currentTaskIndex;
}

function deleteTaskObject(index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1)
    }
}


return {
    getArray,
    addItem,
    downShiftIdToArrayIndex,
    getArrayItem,
    setCurrentTaskIndex,
    getCurrentTaskIndex,
    deleteTaskObject,

};
}


export {
    
createTaskObject,
addTaskToAnArray,
createArrayFactory



}