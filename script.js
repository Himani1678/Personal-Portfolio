
// 1. Dark and Light Mode

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }

});


// 2. Mobile Navigation Menu

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a navigation link

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });

});


// 3. Contact Form Validation

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.innerHTML = "Please fill in all the fields.";

    }

    else if (!email.includes("@") || !email.includes(".")) {

        formMessage.style.color = "red";
        formMessage.innerHTML = "Please enter a valid email address.";

    }

    else {

        formMessage.style.color = "green";
        formMessage.innerHTML =
            "Thank you! Your message has been validated.";

        contactForm.reset();

    }

});


// 4. Display Current Year

document.getElementById("year").innerHTML =
    new Date().getFullYear();
