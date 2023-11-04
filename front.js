/*function add() {
  const myList = document.querySelector("#task");
  const listItem = document.createElement("li");
  let myadd = document.getElementById("input");
  listItem.textContent = myadd.value;
  myList.append(listItem);
}*/
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
