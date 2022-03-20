console.log($)

/////////////////////////////////////
// Selecting elements
/////////////////////////////////////

// document.querySelectorAll('h1')
const $h1 = $('h1')
console.log($h1)

////////////////////////////////////
// Editing Contents
////////////////////////////////////

// change the text
// h1.innerText = 'new text'
// $h1.text('<h2>New Text</h2>New Text')

// change the html
// h1.innerHTML = 'new text'
// $h1.html('<h2>New Text</h2>New Text')

//////////////////////////////////////
// Styling
/////////////////////////////////////////

// const gb = document.querySelector('.goodbye')
// gb.classlist.add('red')
// $('.goodbye').addClass('red')

// gb.classlist.remove('red')
// $('.goodbye').removeClass('red')

// gb.classlist.toggle('red')
// $('.goodbye').toggleClass('red') //adds
// $('.goodbye').toggleClass('red') //removes

// gb.style.backgroundColor = 'pink'
// 
$('.goodbye').css('background-color', 'pink')

/////////////////////////////////////////
// Creating Elements
/////////////////////////////////////////

// document.createElement('div')
// const $div = $('<div>')
// $div.html('<h2>This is my new Div</h2>')
// $('body').append($div)

// 10 minute challenge
// create a ul, append it to the div
// then add 5 li that count 1,2,3,4,5

// const $ul = $("<ul>")
// $div.append($ul)
// for(let i = 0; i < 5; i++) {
//   const $li = $("<li>")
//   $li.text(i+1)
//   $ul.append($li)
// }

////////////////////////////
// Working with Attributes
/////////////////////////////


// const $hello = $("[cheese='munster']")
// console.log($hello.attr('id'))

// $hello.attr('cheese', 'gouda')

///////////////////////////////
// Building the ToDo List
///////////////////////////////

// select my elements
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
