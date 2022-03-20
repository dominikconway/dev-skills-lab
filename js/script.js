console.log('js is up and running')

const $textInput = $("[type='text']")
const $submit = $("[type='submit']")
const $ul = $("#todo-display")

const todos = []

// submit.addEventListener("click", () => {})
$submit.on("click", (event) => {
    // prevents default form behavior
    event.preventDefault()
    // get the value from the input
    // textInput.value
    const newTodo = $textInput.val()
    // add to list of todos
    todos.push(newTodo)
    // add an li with the new todo
    const $li = $("<li>")
    $li.text(newTodo)
    $ul.append($li)
    // add removal event listener
    const remove = (event) => {
        // turn the event target to a jQ object
        const $target = $(event.target)
        // remove it
        $target.remove()
    }
    $li.on("click", remove)
    // clear the input
    $textInput.val("")
})



   