console.log("Welcome to Trio Founder!");
// Contact Form
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("✅ Thank you! Your message has been sent.");
        form.reset();
    });
}

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);
});