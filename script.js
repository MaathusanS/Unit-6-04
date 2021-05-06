let A = 0 // Defines A as variable.
let B = 0 // Defines B as variable.
let H = 0 // Defines H as variable.

document.body.style.backgroundColor = '#ffddd2' // Sets the document body colour.
document.getElementById('calc').addEventListener('click', area) // Creates an event listener for calculate button, which then triggers the area function.

function area () {
  A = document.getElementById('abase').value // Takes the user's input from the A base box.
  B = document.getElementById('bbase').value // Takes the user's input from the B base box.
  H = document.getElementById('height').value // Takes the user's input from the height box.
  A = parseFloat(A) // Turns the inputted string into a float.
  B = parseFloat(B) // Turns the inputted string into a float.
  H = parseFloat(H) // Turns the inputted strng into a float.
  area1 = (A + B) / 2 * H // Performs the area calculation.
  document.getElementById('number').innerHTML = 'Your area is ' + area1 + ' units squared!' // Prints the area out to the user on the page.
  if (isNaN(area1)) {
    alert('Not a valid number!') // If a valid number isn't given, the user will be faced with an alert that says the number is not valid.
  }
}
