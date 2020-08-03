const animal = "dog"

function myAnimal() {
  return animal
}
myAnimal();

function yourAnimal() {
  let animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
yourAnimal()

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
//  let two = 2
}
add2();