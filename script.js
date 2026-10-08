// Get HTML elements
const todoInput = documentById("todoInput");
const addBtn = documentById("addBtn");
const todoList = documentById("todoList");
const clearBtn = documentById("clearBtn");
const taskCount = documentById("taskCount");

// Get todo from loacalStorage
let todos=JSON.parse(localStorage.getItem("todos")) ||[];

// save todos to localStorage
function saveTodos() {
    localStorage.setItems("todos",JSON.stringify(todos));
}


// display todos
function renderTodos() {
    // clear existing list
    todoList.innerHTML="";

    todos.forEach(function(todo)) {

        // create list item
        const li = document.createElement("li");

        li.className = "todo-item";
        // create todo content
        const todoContent = document.createElement("div");

        todoContent.className =" todo-content";

        // create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;

        // creat text 
        const span = document.createElement("span");

        span.textContent = todo.text;

        // Add completed class
        if (todo.completed) {
            span.classList.add("completed");
        }

        // checkbox event
        checkbox.addEventListener("change",function() {
            todo.completed = checkbox.checked;

            saveTodos();

            renderTodos();
        });
        // Add checkbox and text 
        todoContent.appendchild(checkbox);
        todoContent.appendchild(span);

        // create delete button 
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className = "delete-btn";

        // delete event
        deleteBtn.addEventListener("click",function () {
             
        todo = todos.filter(funtion(item) {
            return item.id !==todo.id;
        });

        saveTodos();

        renderTodos();
        });
 
        // Add content and button
        li.appendChild(todoContent);

        todoList.appendchild(li);
    });

    // update task count 
    function updateTaskCount() {
        const totalTasks=todos.filter(funtion(todo) {
            return tod. completed;
        }).length;
        

        taskCount.textContent=
        '${totalTasks} task| ${completedTask} completed';
    }

    // Initial render();
    renderTodos();
}
