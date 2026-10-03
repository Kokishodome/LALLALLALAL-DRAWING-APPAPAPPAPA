let pen = document.getElementById('pen')
let buttons = document.querySelectorAll('button')
let tool = 'pen'
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let drawing = false
let erase = document.getElementById('erase')
let line = document.getElementById('line')
let heart = document.getElementById('heart')
let clearAll = document.getElementById('clearAll')
let startX, startY;
let lastX, lastY;

console.log(buttons);


pen.onclick = function () {
  console.log('pen');
  setTool('pen', pen)
}

erase.onclick = function () {
  console.log('erase');
  setTool('erase', erase)
}

line.onclick = function () {
  console.log('line');
  setTool('line', line)
}

heart.onclick = function () {
  console.log('heart');
  setTool('heart', heart)
}

clearAll.onclick = function () {
  console.log('clearAll');
  setTool('clearAll', clearAll)
}



let setTool = function (t, btn) {
  tool = t
  buttons.forEach(element =>
    element.classList.remove('active')
  );
  btn.classList.add('active')
}

function position(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

canvas.addEventListener('mousedown', function (e) {
  drawing = true
  console.log(drawing);
  let p = position(e)
  startX = p.x
  startY = p.y
  lastX = p.x
  lastY = p.y
})

canvas.addEventListener('mouseup', function () {
  drawing = false
  console.log(drawing);

})

canvas.addEventListener('mousemove', function (e) {
  console.log(Math.random());
  let p = position(e)
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(p.x, p.y)
  ctx.stroke()
  lastX = p.x
  lastY = p.y
})