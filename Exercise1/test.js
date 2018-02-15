function verifyPass()
{
  var pass1 = document.getElementById("FirstPass").value;
  var pass2 = document.getElementById("SecondPass").value;

  if(pass1.length < 8)
  {
    document.getElementById("message").innerHTML =
    "Password is too short";
  }
  else
  {
    if(pass1 == pass2)
    {
      document.getElementById("message").innerHTML =
      "It checks out, cotton";
    }
    else
    {
      document.getElementById("message").innerHTML =
      "It doesn't check out, cotton";
    }
  }
}

function resetFields()
{
  document.getElementById("message").innerHTML = "Please Login.";
}
