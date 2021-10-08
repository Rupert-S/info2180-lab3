window.onload = function(){windowLoad()}
function windowLoad(){
   // insert squares HTML in DOM
  var blocks = document.getElementById("board").childNodes;
  blocks.forEach(element => { element.className = "square";});
  
  const x = 'X'
  const circ = 'O'
  let circTurn

blocks.forEach(elem => {elem.addEventListener('click', isClick)
})
function isClick(e){
  const space = e.target
  const currentClass = circTurn ? circ : x
  spaceClass(space, currentClass)
  changeClass()
}

function spaceClass(space, currentClass){
  space.textContent = currentClass;
  console.log('button clicked');
  space.classList.add(currentClass)
}

function changeClass(){
  circTurn = !circTurn
}
}


