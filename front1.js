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

const btn = document.getElementById("addbtn");
const myinput = document.getElementById("input");
const time = document.getElementById("date");

function add() {
  if (myinput.value === "") {
    alert("You must type something");
  } else {
    const myList = document.querySelector("#task");
    const listItem = document.createElement("li");
    listItem.textContent = myinput.value + time.value;

    // Ajouter le bouton de suppression
    const deleteTaskBtn = document.createElement("buttonx");
    deleteTaskBtn.textContent = "x";
    deleteTaskBtn.addEventListener("click", function () {
      myList.removeChild(listItem);
    });

    // Ajouter le bouton de validation
    const validateTaskBtn = document.createElement("buttonv");
    validateTaskBtn.textContent = "✔";
    validateTaskBtn.addEventListener("click", function () {
      listItem.classList.toggle("checked");
    });

    // Ajouter les boutons à l'élément de la liste
    listItem.appendChild(deleteTaskBtn);
    listItem.appendChild(validateTaskBtn);

    // Ajouter l'élément de la liste à la liste
    myList.appendChild(listItem);
  }

  myinput.value = "";
}
