const myadd = document.getElementById("addbtn");
const myinput = document.getElementById("input");

myadd.onclick = function () {
    if (myinput.value == "") {
        alert("u must type somthing");
    }
    else {
        document.getElementById("task").innerHTML = myinput.value;
        myinput.value = "";
    }
};