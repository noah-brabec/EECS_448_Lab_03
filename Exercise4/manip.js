function changeBorder()
{
  var borderR = document.getElementById("borderR").value;
  var borderG = document.getElementById("borderG").value;
  var borderB = document.getElementById("borderB").value;
  var borderW = document.getElementById("borderW").value;
  var main = document.getElementById("main");

  main.style.borderColor = "rgba("+borderR+","+borderG+","+borderB+","+borderW+")";
}

function changeBackground()
{
  var backgroundR = document.getElementById("backgroundR").value;
  var backgroundG = document.getElementById("backgroundG").value;
  var backgroundB = document.getElementById("backgroundB").value;
  var main = document.getElementById("main");

  main.style.backgroundColor = "rgb("+backgroundR+","+backgroundG+","+backgroundB+")";
}
