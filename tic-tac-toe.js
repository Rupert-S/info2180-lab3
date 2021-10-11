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
// Handles each click
function isClick(e){
  const space = e.target
  const currentClass = circTurn ? circ : x
  if(space.textContent != x && space.textContent != circ){
    spaceClass(space, currentClass)
    changeClass()
  }
  const winner = getWinner();  
}

// Places a Class
function spaceClass(space, currentClass){
  space.textContent = currentClass;
  console.log('button clicked');
  space.classList.add(currentClass)
}

//Change Turn
function changeClass(){
  circTurn = !circTurn
}

// Hover function
blocks.forEach(function(elem) { 
  elem.addEventListener('mouseover',function(e){
      e.target.classList.add('hover');
  });

  elem.addEventListener('mouseout',function(e){
      e.target.classList.remove('hover');
   });
});

  // Checking for a Win
  const winWays = (fBox, sBox, tBox) => {
    let fBoxOwner = fBox.textContent;
    let sBoxOwner = sBox.textContent;
    let tBoxOwner = tBox.textContent;

    if ((fBoxOwner === sBoxOwner) && (sBoxOwner === tBoxOwner)){
      if (fBoxOwner === 'X'){
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      } else if (fBoxOwner === 'O'){
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }
    }
  };

  const diagonalWinner = () => {
    let leftDiag = winWays(blocks[1], blocks[9], blocks[17]);
    let rightDiag = winWays(blocks[5], blocks[9], blocks[13]);

    return leftDiag || rightDiag;
  };

  const columnWinner = () => {
    let rightCol = winWays(blocks[5], blocks[11], blocks[17]);
    let middleCol = winWays(blocks[3], blocks[9], blocks[15]);
    let leftCol = winWays(blocks[1], blocks[7], blocks[13]);

    return leftCol || (middleCol || rightCol);
  };
  const rowWinner = () => {
    let topRow = winWays(blocks[1], blocks[3], blocks[5]);
    let middleRow = winWays(blocks[7], blocks[9], blocks[11]);
    let bottomRow = winWays(blocks[13], blocks[15], blocks[17]);

    return topRow || (middleRow || bottomRow);
  };

  const getWinner = () => {
    return diagonalWinner() || (rowWinner() || columnWinner());
  };

  //Resetting game
  const newGame = document.querySelector('.btn');
  const refreshWindow = () => {
    location.reload();
  }
  newGame.addEventListener('click', refreshWindow)
}



