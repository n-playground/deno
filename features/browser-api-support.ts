// browser API functions
const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                    .then((response) => response.json())
                    // .then((json) => console.log(json))
console.log(todo)

/*
if you run without --allow-net flag, it will give this error:

Uncaught PermissionDenied: network access to "https://jsonplaceholder.typicode.com/todos/1"
*/