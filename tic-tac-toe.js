window.onload = function(){windowLoad()}
function windowLoad(){
   // insert squares HTML in DOM
  var blocks = document.getElementById("board").childNodes;
  blocks.forEach(element => { element.className = "square";});
}





