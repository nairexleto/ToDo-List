const btn = document.getElementById("addbtn");
const myinput = document.getElementById("input");
function add() {
  if (myinput.value === "") {
    alert("u must type somthing");
  } else {
    /*console.log(myinput.value);*/

    const myList = document.querySelector("#task");
    const listItem = document.createElement("li");
    let myadd = document.getElementById("input");
    listItem.textContent = myadd.value;
    myList.append(listItem);
  }
  myinput.value = "";
}
const mylabbel = document.getElementById("time");
update();
setInterval(update, 1000);
function update() {
  let date = new Date();
  mylabbel.innerHTML = formatdate(date);
  function formatdate(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    let pmoram = hour >= 12 ? " PM " : " AM ";
    hour = zero(hour);
    minute = zero(minute);
    sec = zero(sec);
    return hour + ":" + minute + ":" + sec + pmoram;
  }
}
function zero(time) {
  time = time.toString();
  return time.length < 2 ? "0" + time : time;
}
