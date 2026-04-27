const todoList = document.getElementById('to-do-list');
const newTodoInput = document.getElementById('new-to-do-input');
const addTodoBtn = document.getElementById('add-to-do-btn');

addTodoBtn.addEventListener('click', () => {
    const newTodoText = newTodoInput.value;

    if (newTodoText !== '') {
        const newTodoItem = document.createElement('li');
        // newTodoItem.textContent = newTodoText;
        // todoList.append(newTodoItem);
        newTodoItem.textContent = newTodoText;
        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.textContent = 'X';

        deleteTodoBtn.classList.add('delete-todo-btn');
        deleteTodoBtn.addEventListener('click', function() {
            newTodoItem.remove();
        });

        newTodoItem.append(deleteTodoBtn);
        todoList.append(newTodoItem);
        newTodoInput.value = '';
    }
});

