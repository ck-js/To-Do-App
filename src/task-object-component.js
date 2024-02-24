

class Stopwatch {
    constructor() {
        this.startTime = null;
        this.endTime = null;

    }
    start() {
        this.startTime = new Date();
    }
stop() {
    this.endTime = new Date();;
}
elapsed() {
    if (!this.startTime) {
        throw new Error('Stopwatch not yet started!')
    }
    if (!this.endTime) {
        throw new Error('Stopwatch not yet stopped!')
    }
    return this.endTime - this.startTime;
}

}

class Task {
constructor(description,project,timeSpent) {
    this.description = description
    this.project = project
    this.timeSpent = timeSpent
    this.startTime = null;
    this.endTime = null;

    }
    start() {
this.startTime = new Date();
    }
    stop() {
        this.endTime = new Date();;
    }
    elapsed() {
        if (!this.startTime) {
            throw new Error('Stopwatch not yet started!')
        }
        if (!this.endTime) {
            throw new Error('Stopwatch not yet stopped!')
        }
        return this.endTime - this.startTime;
    }




}

function createTaskObject(description,project,startTime) {
    const task = new Task(description,project,startTime)
    
    return task
}
function addTaskToAnArray(object, arrayName) {
    arrayName.push(object)
}
// factory for project arrays
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
function start(index) {
    array[index].startTime = new Date();

}
function stop(index) {
    array[index].endTime = new Date();
    
}
function elapsed(index) {
    if (!array[index].startTime) {
        throw new Error('Stopwatch not yet started!')
    }
    if (!array[index].endTime) {
        throw new Error('Stopwatch not yet stopped!')
    }
    return array[index].endTime - array[index].startTime;
}



return {
    getArray,
    addItem,
    downShiftIdToArrayIndex,
    getArrayItem,
    setCurrentTaskIndex,
    getCurrentTaskIndex,
    deleteTaskObject,
start,
stop,
elapsed,
};
}




export {
 Stopwatch,   
createTaskObject,
addTaskToAnArray,
createArrayFactory

}