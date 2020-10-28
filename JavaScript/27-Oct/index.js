// var opacity = 0
// var intervalID = 0
// function fadOut() {
//   IntervalID = setInterval(hide, 20)
// }

// function hide() {
//   var rectangle = document.getElementById('Rec')
//   opacity = Number(
//     window.getComputedStyle(rectangle).getPropertyValue('opacity'),
//   )
//   if (opacity > 0) {
//     opacity = opacity - 0.1
//     rectangle.style.opacity = opacity
//   } else {
//     clearInterval(intervalID)
//   }
// }

// var Rec = document.getElementById('Rec')
// document.getElementById('doFade').onclick = function () {
//   source.classList.toggle('fade')
// }
// document.getElementById('fadeRev').onclick = function () {
//   source.classList.toggle('nofade')
// }

// $(document).ready(function () {
//   $('button').click(function () {
//     $('#Rec1').fadeToggle()
//     $('#Rec2').fadeToggle('slow')
//     $('#Rec3').fadeToggle(3000)
//   })
// })

// when reload the page it will Fade each has its opacity fading just focus//
var opacity = 0
var intervalID = 0
window.onload = fadeIn

function fadeIn() {
  setInterval(show, 500)
}

function show() {
  var body = document.getElementById('body')
  opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'))
  if (opacity < 1) {
    opacity = opacity + 0.1
    body.style.opacity = opacity
  } else {
    clearInterval(intervalID)
  }
  var body1 = document.getElementById('body1')
  opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'))
  if (opacity < 1) {
    opacity = opacity + 0.4
    body1.style.opacity = opacity
  } else {
    clearInterval(intervalID)
  }
}
