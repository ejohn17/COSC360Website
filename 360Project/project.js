function validate(){
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email2").value;
    var pass = document.getElementById("pw").value;
    var pass2 = document.getElementById("pw2").value;
    if(email != email2){
        alert("Emails do not match, please check again.");
        return false;
    }
    //got this email vailidation from the internet
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        alert("Invalid Email");
        return false;
    }
    else if (pass != pass2){
      alert("Your passwords do no match.");
      return false;
    }
}
function showPass(){
    var pass1 = document.getElementById("pw");
    var pass2 = document.getElementById("pw2");
  if (pass1.type === "password") {
    pass1.type = "text";
    pass2.type = "text";
  } else {
    pass1.type = "password";
    pass2.type = "password"
  }
}
