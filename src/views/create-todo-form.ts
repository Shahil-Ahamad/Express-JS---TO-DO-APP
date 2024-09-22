export function createTodoFormController() {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>
    <h1>Create Todo</h1>
    <form method="post">
        <label for="name">Name
            <input type="text" name="name" placeholder="enter todo name" />
        </label>
        <label for="Status">Status
            <input type="text" name="Status" placeholder=" ot_started, in_progress ,done" />
        </label>

        <button>Submit</button>

    </form>
</body>

</html>
    `;
}
