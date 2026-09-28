const form = document.querySelector("form");
const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length !== 10) {
        alert("Please enter a 10-digit phone number.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("phone", phoneDigits);
    localStorage.setItem("service", service);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    window.location.href = "confirmation.html";
});
