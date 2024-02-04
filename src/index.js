import './style.css'
import {
    taskItemsContainer,
createTaskItem,

} from './user-interface'


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild(taskItemsContainer())
// append task items to task items container
const taskItemsParent = document.getElementById('task-items-container')
taskItemsParent.appendChild(createTaskItem())