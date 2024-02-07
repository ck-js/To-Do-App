import './style.css'
import {
    taskItemsContainer,
createTaskItem,
startStopButton,
createFormModall,


} from './user-interface'


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild(taskItemsContainer())
// append task items to task items container
output.appendChild(createTaskItem())
// append start stop button to body 
output.appendChild(startStopButton())
output.appendChild(createFormModall())

// click event listener for start button
const btn = document.getElementById('start-stop-button')
btn.addEventListener('click', handleClick)

function handleClick() {
    createFormModall();
}


