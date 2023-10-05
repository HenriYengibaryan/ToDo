const firstName = document.getElementById("Henri");
const lastName = document.getElementById("Yengibaryan");
const date = document.getElementById("Date");
const countrey = document.getElementById("Countrey");
const city = document.getElementById("City");
firstName.addEventListener("click", function () {
  firstName.innerHTML = "Henri";
});
lastName.addEventListener("click", function () {
  lastName.innerHTML = "Yengibaryan";
});
date.addEventListener("click", function () {
  date.innerHTML = "03.10.2002";
});
countrey.addEventListener("click", function () {
  countrey.innerHTML = "Armenia";
});
city.addEventListener("click", function () {
  city.innerHTML = "Masis";
});
const education = document.getElementById("ed");
function mouseEnter() {
  const root = document.querySelector(".root");
  let el = document.createElement("div");
  const node = document.createTextNode("Armenian State University of Economy");
  el.appendChild(node);
  el.style.color = "wheat";
  el.style.display = "flex";
  el.style.flexDirection = "row";
  el.style.marginTop = "1.5vh";
  el.style.fontSize = "35px";
  el.style.fontFamily = "Cursive";
  const right = document.querySelector(".rigth");
  right.append(el);
}
education.addEventListener("mouseenter", mouseEnter);
education.addEventListener("mouseleave", function () {
  education.removeEventListener("mouseenter", mouseEnter);
});
const call = document.getElementById("call")
call.addEventListener("click",function (){
    alert("If yow wont call me my number is 077392201")
})

