
let form1 = document.querySelector("#form");
let date = document.querySelector("#date");
let calculate = document.querySelector("#calculate");
let age = document.querySelector("#age");

form1.addEventListener('submit', function(e){
    e.preventDefault();
    let userDate = new Date(date.value);
    let currentYear = new Date().getFullYear();
    age.innerText =  currentYear - userDate.getFullYear();
});
