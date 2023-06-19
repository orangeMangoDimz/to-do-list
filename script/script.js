const content = document.querySelector(`#fill-to-do-list`)
const taskList = document.querySelector(".task-list")
let todoList = JSON.parse(localStorage.getItem("value")) || []
let countInput 

const addTask = () => {
    console.log("dapat : ", countInput)
    if (content.value === '') alert("Please fill the input box!")
    else{
        // add new container
        let wraper = document.createElement("div")
        wraper.setAttribute("class" , "test")
        taskList.appendChild(wraper)
        // add a new task list
        newTask = document.createElement("input")
        newTask.value = content.value
        newTask.setAttribute("type", "text")
        newTask.setAttribute("disabled", "")
        newTask.setAttribute("class", "input-" + countInput++)
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
    saveData(newTask.value)
}

const saveData = (value) => {
    localStorage.setItem("element", taskList.innerHTML)
    localStorage.setItem("countInput", countInput)
    let todo = {
        id : countInput-1,
        content : value
    }
    todoList.push(todo)
    console.log("countInput : " + countInput)
    localStorage.setItem("value", JSON.stringify(todoList))
    //untuk nyimpen datanya bisa pakai JSON
}

const showData = () => {
    taskList.innerHTML = localStorage.getItem("element")
    let temp = localStorage.getItem("countInput")
    console.log("temp : " + temp)
    countInput = "1"
    todoList.forEach(element => {
        console.log(element.content)
        console.log(countInput)
        let input = document.querySelector(".input-" + element.id)
        console.log(input)
        input.value = element.content
    })
    countInput = temp
    if (countInput === null) countInput = "1"
    console.log("countInputSekarang : " + countInput)
}

// const deleteData = () => {
//     localStorage.removeItem("data")
// }

showData()

// deleteData()

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") { // tagName should be uppercase, it's default
        // e.target.classList.toglle("checked")
        console.log("isi")
        // saveData()
    }
    else if (e.target.id === "deleteBtn") {
        // const y = `{"content":"` + e.target.parentElement.parentElement.firstChild.value + `"}`
        const x = JSON.parse(`{"content":"` + e.target.parentElement.parentElement.firstChild.value + `"}`)
        // console.log(x)
        // console.log(y)
        todoList = todoList.filter(t => t.content != x.content)
        console.log(JSON.stringify(todoList))
        console.log(todoList)
        
        
        
        // const x = JSON.parse(`{"content":"` + e.target.parentElement.parentElement.firstChild.value + `"}`)
        // todoList.forEach(todo => {
        //     if (todo.content === x.content) {
        //         console.log(todo)
        //         console.log(x)
        //         console.log("kembar")
        //         todoList = todoList.filter(t => t.content != x.content)
        //     }
        //     console.log("cek : " + JSON.stringify(todo))
        //     console.log("hasil : " + JSON.stringify(todoList))
            // console.log(todoList)
        // })
        e.target.parentElement.parentElement.remove()
        localStorage.setItem("element", taskList.innerHTML)
        localStorage.setItem("value", JSON.stringify(todoList))
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