//function myFunction() {
var x = document.getElementById("myanswer");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
//}
/*function myFunction2() {
  var x = document.getElementById("myanswer2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }*/
//}*/
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert.log("Test");
});
