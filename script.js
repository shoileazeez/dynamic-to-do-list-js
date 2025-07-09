document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    
    // Helper function to toggle empty state
    const toggleEmptyState = () => {
        if (taskList.children.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    };
            
            // Step 3: Create the addTask Function
    const addTask = () => {
        const taskText = taskInput.value.trim();
                
                // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
                
                // Step 4: Task Creation and Removal
                // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;
                
                // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
                
                // Assign onclick event to remove button
        removeButton.onclick = () => {
            taskList.removeChild(li);
            toggleEmptyState();
        };
                
                // Append the remove button to the li element
        li.appendChild(removeButton);
                
                // Append the li to taskList
        taskList.appendChild(li);
                
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
    toggleEmptyState();
});