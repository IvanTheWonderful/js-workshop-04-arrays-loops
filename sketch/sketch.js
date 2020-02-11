// function setup() {
//     createCanvas(400, 200)
//     background(200)
//   }

// function makeSquare() {
//   for (var i = 0; i < count; i++) {     
//     for (var i2 = 0; i2 < count; i2++){
//     rect(x, 10*i2, 10, 10)
//     }
//   x = x + 10
//   }
// }

// function draw() {
//   var x = 10
//   var count = 10

// }

var yOne = 0
var yTwo = 100
var yThree = 200
var speedOne = 3
var speedTwo = 3
var speedThree = 3

function setup() {
  createCanvas(400, 300)
  background(200)
}

function draw() {
  background(200)

  yOne = yOne + speedOne
  if (yOne < 0 || yOne > height) {
    speedOne = speedOne * -1
  }
  rect(30, yOne, 20, 20)

  yTwo = yTwo + speedTwo
  if (yTwo < 0 || yTwo > height) {
    speedTwo = speedTwo * -1
  }
  rect(60, yTwo, 20, 20)

  yThree = yThree + speedThree
  if (yThree < 0 || yThree > height) {
    speedThree = speedThree * -1
  }
  rect(90, yThree, 20, 20)
}