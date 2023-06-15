const content = document.querySelector(`#fill-to-do-list`)
const taskList = document.querySelector("#task-list")

const addTask = () => {
    if (content.value === '')
    {
        alert("Please fill the input box!")
    }
    else
    {
        let newTask = document.createElement("li")
        newTask.innerHTML = content.value
        taskList.appendChild(newTask)
        let editBtn = document.createElement("span")
        editBtn.innerHTML = "&#9998"
        // editBtn.classList.add("editBtn")
        editBtn.setAttribute("class", "editBtn")
        newTask.appendChild(editBtn)
        let deleteBtn = document.createElement("span")
        deleteBtn.innerHTML = "\u00d7"
        // deleteBtn.classList.add("deleteBtn")
        // deleteBtn.setAttribute("class", "deleteBtn")
        deleteBtn.setAttribute("id", "pak")
        newTask.appendChild(deleteBtn)
    }
    content.value = ""
    saveData()
}

const saveData = () => {
    console.log("works")
    localStorage.setItem("data", taskList.innerHTML)
}

const showData = () => {
    taskList.innerHTML = localStorage.getItem("data")
}

showData()

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") { // tagName should be uppercase, it's default
        e.target.classList.toglle("checked")
        saveData()
    }
    // else if (e.target.tagName === "SPAN") {
    // else if (e.target.classList.contains("deleteBtn")) {
    else if (e.target.id === "pak") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)