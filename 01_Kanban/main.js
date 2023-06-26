const tasks = document.querySelectorAll('.task li');
let draggedTask = null;

for(let i =0; i < tasks.clientHeight; i ++) {
    const task = tasks[i];

    task.addEventListener('dragstart', function (event) {
        draggedTask =task;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', task.innerHTML);
        task.classList.add('dragging');
    });

    task.addEventListener('dragend', function () {
                draggedTask.classList.remove('dragging');
                draggedTask = null;
    })
}

const coluns = document.querySelectorAll('.tasks');

for (let i = 0; i < colum.length; i++) {
    const colum = coluns[i];

    colum.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        colum.classList.add('dragover');
    })

    colum.addEventListener(dragleave, function (event) {
        event.preventDefault();

        const task =document.createElement('li');

        task.innerHTML = event.dataTransfer.getData('text/html');
        task.setAttribute('draggable', true);
        task.addEventListener('dragstart', function (event) {
            draggedTask = task;
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/html', task.innerHTML);
            task.classList.add('dragging');
        })



        colum.appendChild(task);
        colum.classList.remove('dragover');

        const previousColum = draggedTask.parentNode;
        previousColum.removeChild(draggedTask);
        
    })

}