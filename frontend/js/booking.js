
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Service:", service);
    console.log("Date:", date);
    console.log("Time:", time);

    window.location.href = "confirmation.html";
});
