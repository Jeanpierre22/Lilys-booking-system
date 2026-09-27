const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("service", service);
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    window.location.href = "confirmation.html";
});
