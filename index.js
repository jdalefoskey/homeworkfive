//creating variables needed for later
let newToDo
let toDoEntry
let newEntry
let currentHour = moment().format('H')

// parsing integer for comparison values
currentHour = parseInt(currentHour)

//create a variable for current date
let today = moment().format('dddd MMMM Do YYYY, h:mm a')
//grab the id currentDay
let calDate = $('#currentDay')
//create a new div with the current date
let newDate = $(`<p id="currentDay">` + today + `</p>`)
//appending to the html id
calDate.append(newDate)

// declaring objects
let events = [
  {
    time: 9,
    content: 'tbc1',
    saved: 'stb1',
    todo: 'todo1'
  },
  {
    time: 10,
    content: 'tbc2',
    saved: 'stb2',
    todo: 'todo2'
  },
  {
    time: 11,
    content: 'tbc3',
    saved: 'stb3',
    todo: 'todo3'
  },
  {
    time: 12,
    content: 'tbc4',
    saved: 'stb4',
    todo: 'todo4'
  },
  {
    time: 13,
    content: 'tbc5',
    saved: 'stb5',
    todo: 'todo5'
  },
  {
    time: 14,
    content: 'tbc6',
    saved: 'stb6',
    todo: 'todo6'
  },
  {
    time: 15,
    content: 'tbc7',
    saved: 'stb7',
    todo: 'todo7'
  },
  {
    time: 16,
    content: 'tbc8',
    saved: 'stb8',
    todo: 'todo8'
  },
  {
    time: 17,
    content: 'tbc9',
    saved: 'stb9',
    todo: 'todo9'
  }
]

// for loop that everything runs off of
for (i = 0; i < events.length; i++) {
  //checking time and updating background color
  let todo = events[i].todo
  let info = localStorage.getItem(todo)
  let textBlock = events[i].content
  let checked = events[i].saved
  let saved = events[i].saved
  document.getElementById(textBlock).innerHTML = info
  if (events[i].time === currentHour) {
    document.getElementById(textBlock).style.backgroundColor = 'red'
  } else if (events[i].time < currentHour) {
    document.getElementById(textBlock).style.backgroundColor = 'lightgray'
  } else {
    document.getElementById(textBlock).style.backgroundColor = 'aqua'
  }

  //saves to local storage when you click on save
  $('#' + saved).click(function () {
    window.localStorage.setItem(todo, document.getElementById(textBlock).value)
    document.getElementById(checked).innerHTML =
      '<img src="Assets/checkmark.png" width="30px" height="30px">'
  })
}
