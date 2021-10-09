window.onload = function(){windowLoad()}
function windowLoad(){
   // insert squares HTML in DOM
  var blocks = document.getElementById("board").childNodes;
  blocks.forEach(element => { element.className = "square";});
  
  const x = 'X'
  const circ = 'O'
  const WINNING_WAYS = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8], 
    [2,4,6]
  ];
  let circTurn

blocks.forEach(elem => {elem.addEventListener('click', isClick)
})
function isClick(e){
  const space = e.target
  const currentClass = circTurn ? circ : x
  spaceClass(space, currentClass)
  changeClass()
  whoWon()
}

function spaceClass(space, currentClass){
  space.textContent = currentClass;
  console.log('button clicked');
  space.classList.add(currentClass)
}

function changeClass(){
  circTurn = !circTurn
}

blocks.forEach(function(elem, index, list) { 
  elem.addEventListener('mouseover',function(e){
      e.target.classList.add('hover');
  });

  elem.addEventListener('mouseout',function(e){
      e.target.classList.remove('hover');
   });
});

//checking for a winner
 function whoWon(){
  let roundWon = false;
  let gameState = [];
  for (let i = 0; i<= 7; i++){
    const winCond = WINNING_WAYS[i];
    const a = blocks[winCond[0]];
    const b = blocks[winCond[1]];
    const c = blocks[winCond[2]];
    gameState += [a.textContent, b.textContent, c.textContent]
    if (a.textContent == '' || b.textContent =='' || c.textContent ==''){
      continue;
    }
    if(a.textContent != '' && a.textContent == b.textContent && b.textContent == c.textContent && a.textContent == c.textContent){
      roundWon = true;
      console.log(gameState);
      break;
    }
  }
  if(roundWon){
    console.log('winner') 
  }
}
}


