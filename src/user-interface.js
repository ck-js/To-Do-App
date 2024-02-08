// get the current time in hours and minutes
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
// array to store task item elements
let taskItemsArray = [
    {
        description: 'build task item component',
        project: 'Javascript',
        timeSpent: currentHour + ':' + currentMinute,

    },
        {
            description: 'build to do task app',
            project: 'Javascript',
            timeSpent: currentHour + ':' + currentMinute,
        }

];

// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'



return container;
}
// create task item
function createTaskItem() {
const taskItemsContainer = document.getElementById(
    'task-items-container');
   for (let i = 0;i < taskItemsArray.length; i++) {
        const item = taskItemsArray[i];
    
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

// function createDescriptionComponent(description) {
// const container = document.createElement('div');
// container.classList.add('task-description');
// for (let i = 0; i < taskItemsArray.length; i++) {
//     const item = taskItemsArray[i];
    
//     const div = document.createElement('div');
// div.textContent = item.description;

// container.appendChild(div)
    
// }
// return container;
// }
// // add project component to task item cntainer
// function addProjectComponent(project){
//     const container = document.createElement('div');
//     container.classList.add('task-project');
//     for (let i = 0; i < taskItemsArray.length; i++) {
//         const item = taskItemsArray[i];
        
//         const div = document.createElement('div');
//     div.textContent = item.project;
    
//     container.appendChild(div)
        
//     }
//     return container;
//     }

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
const label1 = document.createElement('label')
 label1.for = 'description';
label1.textContent = 'Description';
const input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'description';

const label2 = document.createElement('label');
  label2.for = 'project';
  label2.textContent = 'Project';
  const input2 = document.createElement('input');
  input2.id = 'project';



// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(label2);
form.appendChild(input2)


return dialog;
}
// function to create label text input pairs
function createLabelTextInputPair(forAttribute) {
    const label = document.createElement('label');
  label.for = forAttribute;
  label.textContent = forAttribute;
  const input = document.createElement('input');
  input.id = forAttribute;

label.append(input)

return label;




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







export {
taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
openFormDialog,




}