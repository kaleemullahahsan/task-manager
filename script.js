      document.addEventListener("DOMContentLoaded", function() {
    const taskContainer = document.getElementById("task-container");
    const taskTitleInput = document.getElementById("task-title");
    const taskDescriptionInput = document.getElementById("task-description");
    const addTaskBtn = document.getElementById("add-task");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const container = document.querySelector('.container');
    const header = document.querySelector('.header');
    const inputContainer = document.querySelector('.input-container');

    addTaskBtn.addEventListener("click", addTask);
    taskContainer.addEventListener("click", handleTaskActions);
    darkModeToggle.addEventListener("change", toggleDarkMode);

    function addTask() {
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        if (title !== "" && description !== "") {
            const taskElement = createTaskElement(title, description);
            taskContainer.appendChild(taskElement);

            // Clear input fields
            taskTitleInput.value = "";
            taskDescriptionInput.value = "";
        }
    }

    function createTaskElement(title, description) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";

        const taskContent = `
            <div>
                <strong>${title}</strong>
                <p>${description}</p>
            </div>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskElement.innerHTML = taskContent;
        return taskElement;
    }

    function handleTaskActions(event) {
        const target = event.target;

        if (target.classList.contains("complete-btn")) {
            const taskElement = target.closest(".task");
            taskElement.classList.toggle("completed");

            // Change button text to "Completed" when task is marked as completed
            const completeBtn = target;
            completeBtn.textContent = taskElement.classList.contains("completed") ? "Completed" : "Complete";
        } else if (target.classList.contains("delete-btn")) {
            const taskElement = target.closest(".task");
            taskElement.remove();
        }
    }

    function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode-container"); // Toggle the dark-mode-container class
    header.classList.toggle("dark-mode");
    inputContainer.classList.toggle("dark-mode");
}

});
