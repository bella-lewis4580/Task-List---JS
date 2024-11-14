

// function to add task to the list
function addTask(){
    //get the task input value
    const taskInput = document.getElementById("taskInput");
    //get text and trim extra spaces
    const taskText = taskInput.value.trim();


    //check input is not empty
    if (taskText !== ""){
        //get the ul element where the task will be added
        const taskList = document.getElementById("taskList");
        
        //create a new li element for task
        const li = document.createElement("li");
        li.textContent = taskText;

        //append the new li to the ul
        taskList.appendChild(li);

        //clear the input field after adding the task
        taskInput.value = "";

        li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });
}}

// add event listener to add task button after dom is loaded
document.getElementById("addTaskButton").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        addTask();
    }
})

//reload the page with refresh button

document.getElementById("refreshButton").addEventListener("click", function (){
    location.reload();
})


function removeCompletedTasks(){
    // select all tasks with the "completed" class
    const completeTasks = document.querySelectorAll(".completed");
    //loop through completed tasks and remove each from the task
    completeTasks.forEach(task => task.remove());
}
removeCompletedButton.onclick = removeCompletedTasks;