document.getElementById("date").max = "2014-12-31";
const PasswordC = document.getElementById("pswrdc");
const Password = document.getElementById("pswrd");

function check() {
  if (PasswordC.value !== Password.value) {
    PasswordC.value = "";
    PasswordC.ariaPlaceholder = "u have to put the same password";
  }
}
