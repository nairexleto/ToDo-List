function addate() {
  let myinser = document.getElementById("inser");

  if (myinser.value === "") {
    alert("enter a date ");
  } else {
    const myliste = document.querySelector("#tasklist");
    const dateItem = document.createElement("li");
    dateItem.textContent = myinser.value;
    myliste.appendChild(dateItem);

    var a = document.createElement("a");
    const lienBtn = document.createElement("button");
    lienBtn.textContent = "Add";
    lienBtn.addEventListener("click", function () {});
    myliste.appendChild(lienBtn);
    a.appendChild(lienBtn);
    a.href = "task.html";
    a.target = "_blank";
    myliste.appendChild(a);
  }
  myinser.value = "";
}
document.getElementById("inser").min = new Date(
  new Date().getTime() - new Date().getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

const time = document.getElementById("date");
