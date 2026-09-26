let pen = document.getElementById('pen')
let buttons = document.getElementsByTagName('button')
let tool = 'pen'
let canvas = document.getElementsByTagName('canvas')[0]
let drawing = false

console.log(buttons);


pen.onclick = function () {
  console.log('pen');
  setTool('pen', pen)
}

let setTool = function(t, btn){
  tool = t
  buttons.forEach(element => 
    element.classList.remove('active')
  );
  btn.classList.add('active')
}

canvas.addEventListener('mousedown', function(){
  drawing = true
  console.log(drawing);
  
})

canvas.addEventListener('mouseup', function(){
  drawing = false
  console.log(drawing);
  
})