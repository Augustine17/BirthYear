

var btn = document.getElementById("btn");
var res = document.getElementById("res");
btn.addEventListener("click", function() {
    var birthday = document.getElementById("birthday");

    if (!birthday.value) {
        alert("Please enter your birthday!!")
      } else {
    var dateEntered = new Date(birthday.value);
    var now = new Date();
    
    var years = now.getFullYear() - dateEntered.getFullYear()
    res.innerHTML = `Your age is ${years} years old`;
      }
  });