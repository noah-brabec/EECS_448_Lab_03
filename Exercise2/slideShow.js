
var listOfImages = ["camembert", "havarti", "Parmesanoooo","withKNIFE","variousCheeses"];
var imageIndex = 0;

function next()
{
  imageIndex++;
  document.getElementById("images").src = listOfImages[imageIndex] + ".jpg";
}

function previous()
{
  imageIndex--;
  document.getElementById("images").src = listOfImages[imageIndex] + ".jpg";
}
