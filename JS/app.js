const todolist = [{todo: "testing the script", status:"in progress"}, {todo: "JS and CSS link", status:"complete"}]
let completedtodos = []
for (let task of todolist) {
    let { todo, status } = task;
    if (status === "complete"){
        completedtodos.push(task)
        console.log(completedtodos)
    }
}
for (let completedtask of completedtodos) {
    let { todo } = completedtask;
    console.log(todo)
}