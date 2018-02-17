
var listOfImages = ["camembert", "havarti", "Parmesanoooo","withKNIFE","variousCheeses"];
var imageIndex = 0;

function next()
{
  if((imageIndex + 1) > 4)
  {
    imageIndex = 0;
  }
  else
  {
    imageIndex++;
  }
  document.getElementById("images").src = listOfImages[imageIndex] + ".jpg";
}

function previous()
{
  if((imageIndex - 1) < 0)
  {
    imageIndex = 4;
  }
  else
  {
    imageIndex--;
  }
  document.getElementById("images").src = listOfImages[imageIndex] + ".jpg";
}
