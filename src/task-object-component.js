class Task {
constructor(description,project,timeSpent) {
    this.description = description
    this.project = project
    this.timeSpent = timeSpent
}    
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


return {
    getArray,
    addItem,
    downShiftIdToArrayIndex,
    getArrayItem,

};
}


export {
createTaskObject,
addTaskToAnArray,
createArrayFactory



}