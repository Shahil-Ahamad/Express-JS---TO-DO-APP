import { TTodo } from "../models/todo-model";

export  function getTodoView(todo: TTodo) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
</head>
<body>
    <p>Id:${todo.id}</p>
    <h1>Name:${todo.name}</h1>
    <p>Status: ${todo.status}</p

</body>
</html>
`;
}
