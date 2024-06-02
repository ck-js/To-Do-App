import {
     formatDistance,
      subDays 
    } from "date-fns";


import {
    Stopwatch,
    createTaskObject,
addTaskToAnArray,
} from './task-object-component';



// click event listener for start button
function startBtnEventHandler() {
const startBtn = document.getElementById('start-stop-button')
    startBtn.addEventListener('click', () => {
    openCreateFormDialog();
    
    })
    }

// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'

return container;
}
// create task item
function createTaskItem(array) {
const taskItemsContainer = document.getElementById('task-items-container');
   for (let i = 0;i < array.length; i++) {
        const item = array[i];
    
        const taskItemElement = document.createElement('div');
        taskItemElement.classList.add('task-item-element')
        taskItemElement.id = item.id;

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
        div3.id = 'task-date';
        if (!item.daysLeft) {
div3.textContent = '';
        } else {
        div3.textContent = `${item.daysLeft} days left`;

        }
        // div for start and stop button
        const div4 = document.createElement('div');
div4.classList.add('task-component')
div4.id = 'task-start';
div4.textContent = item.isComplete;



        taskItemElement.appendChild(div)
        taskItemElement.appendChild(div2)
        taskItemElement.appendChild(div3)
        taskItemElement.appendChild(div4)
        
        taskItemsContainer.appendChild(taskItemElement)
    }
        
    return taskItemsContainer;
}

// create start and stop button component
function startStopButton() {
    const button = document.createElement('div');
    button.id = 'start-stop-button';
const h3 = document.createElement('h3')
h3.textContent = '+';

button.appendChild(h3)

    return button;
}

// create form dialog
function createFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'create-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.id = 'create-close';
close.classList.add('close')
close.textContent = 'Cancel';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Task';

const form = document.createElement('form');
form.id = 'create-form'

const wrapper1 = document.createElement('div');
wrapper1.classList.add('form-wrappers')
const label1 = createLabel('create-description', 'Description');
const input1 = createInput('create-description', 'text')
wrapper1.appendChild(label1)
wrapper1.appendChild(input1)

const wrapper2 = document.createElement('div');
wrapper2.classList.add('form-wrappers')
const label2 = createLabel('create-project','Project');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'create-project';
wrapper2.appendChild(label2)
wrapper2.appendChild(input2)

const option1 = document.createElement('option');
option1.value = 'no-project'
option1.text = 'No Project';
const option2 = document.createElement('option');
option2.value = 'create-project'
option2.text = 'Create Project';


// const input3 = document.createElement('span')
// input3.id = 'create-start-time'

const input3 = createDateTimeInput('create-date');



const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'create-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(wrapper1);
form.appendChild(wrapper2);
// form.appendChild(label3);
form.appendChild(input3)
form.appendChild(submit)
input2.appendChild(option1)
input2.appendChild(option2)

return dialog;
}

// update form dialog
function updateFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'update-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const wrapper1 = document.createElement('div');
wrapper1.id = 'update-nav-wrapper';
const close = document.createElement('span');
close.classList.add('close')
close.id = 'update-close';
close.textContent = 'Cancel';
wrapper1.appendChild(close)

const remove = document.createElement('span');
remove.classList.add('delete')
remove.textContent = 'Delete';
remove.id = 'update-delete';
wrapper1.appendChild(remove)

const h2 = document.createElement('h2')
h2.innerHTML = 'Update Task';

const form = document.createElement('form');
form.id = 'update-form'

const wrapper2 = document.createElement('div');
wrapper2.classList.add('form-wrappers')
const label1 = createLabel('update-description', 'Description');
const input1 = createInput('update-description', 'text')
wrapper2.appendChild(label1)
wrapper2.appendChild(input1)

const wrapper3 = document.createElement('div');
wrapper3.classList.add('form-wrappers')
const label2 = createLabel('update-project','Project');
const input2 = createInput('update-project','text');
wrapper3.appendChild(label2)
wrapper3.appendChild(input2)

const input3 = createDateTimeInput('update-date');

const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'update-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(wrapper1);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(wrapper2)
form.appendChild(wrapper3)
// form.appendChild(label3);
form.appendChild(input3)
form.appendChild(submit)

return dialog;
}
// create project form dialog
function createProjectFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'create-project-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.classList.add('close')
close.textContent = '&times;';
close.id = 'create-project-close';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Project';

const form = document.createElement('form');
form.id = 'create-project-form'
const label1 = createLabel('create-project-name', 'Project');
const input1 = createInput('create-create-project-name', 'text')
input1.placeholder = 'Enter a project name';
const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'create-project-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(submit)

return dialog;
}

function createLabel(forAttribute,textContent) {
    const label = document.createElement('label')
    label.htmlFor = forAttribute;
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
function openCreateFormDialog() {
    const dialog = document.getElementById('create-dialog')
    dialog.showModal()
    return dialog;
}
function openUpdateFormDialog() {
    const dialog = document.getElementById('update-dialog')
    dialog.showModal()
    return dialog;
}
function closeCreateDialog() {
    const dialog = document.getElementById('create-dialog')
    dialog.close()
}
function closeUpdateDialog() {
    const dialog = document.getElementById('update-dialog')
    
    removeTaskItemsFromContainer()
    updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))
    dialog.close()
}
function openCreateProjectFormDialog() {
    const dialog = document.getElementById('create-project-dialog')
    dialog.showModal()
    return dialog;
}
function closeCreateProjectDialog() {
    const dialog = document.getElementById('create-project-dialog')
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

const selectElement = document.getElementById('project-filter')
const selectedValue = selectElement.value;



if (selectedValue === 'default') {
    alert(selectedValue)
const update = output.appendChild(createTaskItem(arrayName))

return update;
}

}
// project filter select dom element
function createProjectFilterSelect() {
const container = document.createElement('div')
container.id = 'project-filter-container'

const filterWrapper = document.createElement('div');
filterWrapper.id = 'filter-wrapper'

const label2 = createLabel('project-filter','Filter');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'project-filter';

const option1 = document.createElement('option');
option1.value = 'default'
option1.text = '-- Select Project --';

const option2 = document.createElement('option');
option2.value = 'all-tasks'
option2.text = 'All Tasks';

container.appendChild(filterWrapper)
filterWrapper.appendChild(label2)
filterWrapper.appendChild(input2)
input2.appendChild(option1)
input2.appendChild(option2)

return container;
}

// create method that creats du date label and input
function createDateTimeInput(idAttribute) {
    const dateWrapper = document.createElement('div');
    dateWrapper.classList.add('form-wrappers');

    const label = createLabel(idAttribute, 'Date');
    const input = document.createElement('input');
    input.id = idAttribute;
    input.type = 'date';

    dateWrapper.appendChild(label);
    dateWrapper.appendChild(input);

    return dateWrapper;
}



export {
    startBtnEventHandler,
taskItemsContainer,
createTaskItem,
startStopButton,
createFormDialog,
updateFormDialog,
openCreateFormDialog,
openUpdateFormDialog,
closeCreateDialog,
closeUpdateDialog,

removeTaskItemsFromContainer,
updateTasksContainer,
createProjectFormDialog,
openCreateProjectFormDialog,
closeCreateProjectDialog,
createProjectFilterSelect,

}
