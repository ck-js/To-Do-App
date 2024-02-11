
// get the current time in hours and minutes
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
function getCurrentHourAndMinute() {
    const currentHourAndMinute = currentHour + ':' + currentMinute;

    return currentHourAndMinute;
}



// array to store task item elements
// let taskItemsArray = [
//     {
//         description: 'build task item component',
//         project: 'Javascript',
//         timeSpent: currentHour + ':' + currentMinute,

//     },
//         {
//             description: 'build to do task app',
//             project: 'Javascript',
//             timeSpent: currentHour + ':' + currentMinute,
//         }

// ];

// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'

return container;
}
// create task item
function createTaskItem(array) {
const taskItemsContainer = document.getElementById(
    'task-items-container');
   for (let i = 0;i < array.length; i++) {
        const item = array[i];
    
        const taskItemElement = document.createElement('div');
        taskItemElement.classList.add('task-item-element')

        const div = document.createElement('div');
        div.classList.add('task-item');
        div.id = 'task-description';
        div.textContent = item.description;
        
        const div2 = document.createElement('div');
        div2.classList.add('task-item');
        div2.id = 'task-project';
        div2.textContent = item.project;
        
        const div3 = document.createElement('div');
        div3.classList.add('task-item');
        div3.id = 'task-time-spent';
        div3.textContent = item.timeSpent;

        taskItemElement.appendChild(div)
        taskItemElement.appendChild(div2)
        taskItemElement.appendChild(div3)
        
        taskItemsContainer.appendChild(taskItemElement)
    }
        
    return taskItemsContainer;
}

// create start and stop button component
function startStopButton() {
    const button = document.createElement('div');
    button.id = 'start-stop-button';
const h3 = document.createElement('h3')
h3.textContent = 'Start';

button.appendChild(h3)

    return button;
}

// create form dialog
function createFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.classList.add('close')
close.textContent = '&times;';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Task';

const form = document.createElement('form');

const label1 = createLabel('description', 'Deez asian nutz');
const input1 = createInput('description', 'text')


const label2 = createLabel('project','Project');
const input2 = createInput('project','text');

const label3 = createLabel('time-spent','Time Spent')
const input3 = createInput('time-spent', 'text')

const submit = createInput('subnit','submit');
submit.value = 'Done';


// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(label2);
form.appendChild(input2)
form.appendChild(label3);
form.appendChild(input3)
form.appendChild(submit)

return dialog;
}
function createLabel(forAttribute,textContent) {
    const label = document.createElement('label')
    label.for = forAttribute;
label.textContent = textContent;

return label;
}
function createInput(idAttribute,typeAttribute){
const input = document.createElement('input')
input.id = idAttribute;
input.typ = typeAttribute;

return input; 
}

// function to create and open form dialog
function openFormDialog() {
    const dialog = document.getElementById('dialog')
    dialog.showModal()
    return dialog;
}
function closeDialog() {
    const dialog = document.getElementById('dialog')
    dialog.close()

}
// function to remove task items from container
function removeTaskItemsFromContainer() {
const container = document.getElementById('task-items-container')

for (let i = container.children.length -1; i >= 0; i--) {
const child = container.children[i];
container.removeChild(child)

}
}
// function to update the tasks container elements
function updateTasksContainer(arrayName) {
const update = output.appendChild(createTaskItem(arrayName))

return update;

}





export {
    // taskItemsArray,
taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,
getCurrentHourAndMinute,
removeTaskItemsFromContainer,
updateTasksContainer,



}
