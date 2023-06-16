const content = document.querySelector(`#fill-to-do-list`)
const taskList = document.querySelector(".task-list")

const addTask = () => {
    if (content.value === '') alert("Please fill the input box!")
    else{
        // add new container
        let wraper = document.createElement("div")
        wraper.setAttribute("class" , "test")
        taskList.appendChild(wraper)
        // add a new task list
        let newTask = document.createElement("input")
        newTask.value = content.value
        newTask.setAttribute("type", "text")
        newTask.setAttribute("disabled", "")
        wraper.appendChild(newTask)
        // add new container
        let action = document.createElement("div")
        action.setAttribute("class", "action")
        wraper.appendChild(action)
        // add edit button
        let editBtn = document.createElement("button")
        editBtn.innerHTML = "&#9998"
        editBtn.setAttribute("class", "editBtn")
        action.append(editBtn)
        // add delete button
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "\u00d7"
        deleteBtn.setAttribute("id", "deleteBtn")
        action.appendChild(deleteBtn)
    }
    content.value = ""
    // saveData()
}

// const saveData = () => {
//     localStorage.setItem("data", taskList.innerHTML)
//     //untuk nyimpen datanya bisa pakai JSON
// }

// const showData = () => {
//     taskList.innerHTML = localStorage.getItem("data")
// }

// const deleteData = () => {
//     localStorage.removeItem("data")
// }

// showData()

// deleteData()

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") { // tagName should be uppercase, it's default
        // e.target.classList.toglle("checked")
        console.log("isi")
        // saveData()
    }
    else if (e.target.id === "deleteBtn") {
        e.target.parentElement.parentElement.remove()
        // saveData()
    }
    else if (e.target.classList.contains("editBtn")){
        let task = e.target.parentElement.parentElement.firstChild
        if (e.target.innerHTML === "✎"){
            task.removeAttribute("disabled")
            task.focus()
            e.target.innerHTML = "Save"
        }
        else {
            task.setAttribute("disabled", "")
            e.target.innerHTML = "&#9998"
        }
        // saveData()
    }
}, false)