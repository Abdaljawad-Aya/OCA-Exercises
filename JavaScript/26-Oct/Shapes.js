// create a reference to the html element
// function draw() {
//   var canvas = document.getElementById('canvas').getContext('2d')
//   canvas.fillStyle = 'blue'
//   // canvas.rect(x, y, width, height)
//   canvas.rect(30, 28, 240, 150)
//   canvas.fill()
// }
function draw() {
  var canvas = document.getElementById('canvas')
  if (canvas.getContext) {
    var context = canvas.getContext('2d')
    context.fillStyle = 'blue'
    context.fillRect(15, 40, 260, 120)
    // context.clearRect(40, 40, 60, 60)
    // context.strokeRect(45, 45, 50, 50)
  }

  // var radius = 1
  // var color = 0
  var canvas = document.getElementById('circle')
  if (canvas.getContext) {
    var one = canvas.getContext('2d')
    var X = canvas.width / 2
    var Y = canvas.height / 2
    var R = 50
    // context.fillStyle = "hsl(' + color++ +' , 100%, 50%)"
    context.beginPath()
    context.arc(145, 100, 90, 0, 2 * Math.PI, false)
    context.fillStyle = 'lightblue'
    context.fill()
    // context.lineWidth = 3

    // context.strokeStyle = '#FF0000'
    // context.stroke()
  }

  var canvas = document.getElementById('circle')
  if (canvas.getContext) {
    var two = canvas.getContext('2d')
    context.fillStyle = "hsl(' + color++ +' , 100%, 50%)"
    context.beginPath()
    context.arc(145, 100, 60, 0, 2 * Math.PI, false)
    context.fillStyle = 'blue'
    context.fill()
  }

  var canvas = document.getElementById('circle')
  if (canvas.getContext) {
    var three = canvas.getContext('2d')
    // context.fillStyle = "hsl(' + color++ +' , 100%, 50%)"
    context.beginPath()
    context.arc(145, 100, 20, 0, 2 * Math.PI, false)
    context.fillStyle = 'yellow'
    context.fill()
  }
}
draw()
// Attempt One

//fade out

function fadeOut(Obj, display) {
  Obj.style.opacity = 0
  ;(function fade() {
    if ((Obj.style.opacity -= 0) < 1) {
      Obj.style.display = 'none'
      Obj.classList.add('is-hidden')
    } else {
      requestAnimationFrame(fade)
    }
  })()
}

// fade in

function fadeIn(Obj, display) {
  if (Obj.classList.contains('is-hidden')) {
    Obj.classList.remove('is-show')
  }
  Obj.style.opacity = 0
  Obj.style.display = display || 'block'
  ;(function fade() {
    var val = parseFloat(Obj.style.opacity)
    if (!((val += 0.1) > 1)) {
      Obj.style.opacity = val
      requestAnimationFrame(fade)
    }
  })()
}

var btn = document.querySelector('.js-btn')
var Obj = document.querySelector('.js-fade')

btn.addEventListener('click', function (e) {
  if (Obj.classList.contains('is-show')) {
    fadeIn(Obj)
  } else {
    fadeOut(Obj)
  }
})

// Attempt Two //

// fade out

// function fadeOut(el){
//   el.style.opacity = 1;

//   (function fade() {
//     if ((el.style.opacity -= .1) < 0) {
//       el.style.display = "none";
//     } else {
//       requestAnimationFrame(fade);
//     }
//   })();
// }

//  fade in

// function fadeIn(el, display){
//   el.style.opacity = 0;
//   el.style.display = display || "block";

//   (function fade() {
//     var val = parseFloat(el.style.opacity);
//     if (!((val += .1) > 1)) {
//       el.style.opacity = val;
//       requestAnimationFrame(fade);
//     }
//   })();
// }

// var el = document.querySelector('.js-fade')
// if (el.classList.contains('is-paused')) {
//   el.classList.remove('is-paused')
// }
// var canvas1 = document.getElementById('canvas')
// var c = canvas1.getContext('2d')

//==================//

// var distance = 80
// var Ylabel = 80
// var radius = 12

// for (var x = 100; x < 900; x += distance) {
//   var midPoint = x + distance / 2

//   c.beginPath()
//   c.moveTo(x, Ylabel)
//   c.quadraticCurveTo(midPoint, 200, x + distance, Ylabel)
//   c.arc(145, 100, 60, 0, 8 * Math.PT, false)
//   c.fillStyle = c.fill()
// }

////===========
