function addate() {
    const myinser=document.getElementById("inser");
    if (myinser.value === ""){
    alert("enter a date ");
}
else{
const  myliste=document.querySelector("#tasklist");
const  dateItem = document.createElement("li");
dateItem.textContent= myinser.value;
myliste.appendChild(dateItem);
        const lienURL = "todoliste.html";
        const lienElement = document.createElement("a");
        lienElement.href = lienURL;
        lienElement.textContent = " add task relative to this date" + myinser.value;
        myliste.appendChild(lienElement);

}
myinser.value="";
}
