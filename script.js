document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    
    // Initialize tasks array
    let tasks = [];
    
    // Helper function to toggle empty state
    const toggleEmptyState = () => {
        if (taskList.children.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    };
    
    // Load tasks from Local Storage
    const loadTasks = () => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
        toggleEmptyState();
    };
    
    // Save tasks to Local Storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    
    // Create task element
    const createTaskElement = (taskText) => {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        
        removeButton.onclick = () => {
            // Remove from tasks array
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
            }
            
            // Remove from DOM
            taskList.removeChild(li);
            
            // Update Local Storage
            saveTasks();
            toggleEmptyState();
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
    };
            
    // Step 3: Create the addTask Function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Add task to tasks array
        tasks.push(taskText);
        
        // Create task element in DOM
        createTaskElement(taskText);
        
        // Save to Local Storage
        saveTasks();
        
        // Clear the task input field
        taskInput.value = '';
        
        // Update empty state
        toggleEmptyState();
    };
    addButton.addEventListener('click', addTask);
    
    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
    // Load tasks from Local Storage when page loads
    loadTasks();
});