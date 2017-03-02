window.onload = function() {

var firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", alertUser);

var secondButton = document.getElementById("secondButton");
secondButton.addEventListener("click", appendParagraph);

var thirdButton = document.getElementById("thirdButton");
thirdButton.addEventListener("click", removeParagraph);
}

var alertUser = function() {
  alert("You've clicked button one");
}

var appendParagraph = function() {
  var infoSection = document.getElementById("infoSection");
  var newParagraph = document.createElement("p");
  infoSection.appendChild(newParagraph);
  newParagraph.innerHTML = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
}

var removeParagraph = function() {
  infoSection.removeChild(infoSection.firstChild);
}
