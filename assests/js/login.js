const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function() {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});

document.getElementById("Csubmit").addEventListener("submit", (e) => {
    e.preventDefault();
    let password = document.getElementById("Cpassword");
    let username = document.getElementById("Cname");
    if (password == "1234" && username == "Ishika") {
        window.location.href = "customer-page.html.html"
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

document.getElementById("Esubmit").addEventListener("submit", (e) => {
    e.preventDefault();
    let password = document.getElementById("Epassword");
    let username = document.getElementById("Ename");
    if (password == "1234" && username == "Ishika") {
        window.location.href = "customer-page.html.html"
    } else {
        alert("Invalid credentials. Please try again.");
    }
});