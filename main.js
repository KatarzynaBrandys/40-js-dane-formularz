let button = document.querySelector("button");
let name = document.getElementById("imie");
let surname = document.getElementById("nazwisko");
let phone = document.getElementById("telefon");
let p1 = document.getElementById("name");
let p2 = document.getElementById("surname");
let p3 = document.getElementById("phone");


document.querySelector("button").onclick = function () {
    p1.textContent = (name.value);
    p2.textContent = (surname.value);
    p3.textContent = (phone.value);
}


