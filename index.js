var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
<<<<<<< HEAD
  var animal = 'cat'
=======
  var animal ='cat'
>>>>>>> 1f4c10cf87ba029261012f6c24b1bc1d96105ee9
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

const two = 2
<<<<<<< HEAD

=======
>>>>>>> 1f4c10cf87ba029261012f6c24b1bc1d96105ee9
function add2(n) {
  return n + two

  // Feel free to move things around!
<<<<<<< HEAD

=======
 
>>>>>>> 1f4c10cf87ba029261012f6c24b1bc1d96105ee9
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()