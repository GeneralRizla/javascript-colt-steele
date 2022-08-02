let input = prompt("what would you like to do?")
const todos = ["Feed chickens", "Code more"]
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} - ${todos[i]}`);
        } 
    } else if (input === "new") {
        const newTodo = prompt("Ok, what would you like to add?")
        todos.push(newTodo);
        console.log(`${newTodo} added to your list`);
    } else if (input === "delete") {
        const rmvTodo = parseInt(prompt("Ok, what would you like to remove? please pick number."));
        if (!Number.isNaN(rmvTodo)) {
            const deleted = todos.splice(rmvTodo, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("what would you like to do?")
}
console.log("OK QUIT THE APP")