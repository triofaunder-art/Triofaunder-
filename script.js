console.log("Welcome to Trio Founder!");

// Contact Form
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function() {
        alert("Thank you! Your request is being sent.");
    });
}

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (topBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
};

if (topBtn) {
    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }
});
// Animated Counter

const counters = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.innerText);

            let count = 0;
            const speed = target / 100;

            const update = () => {
                count += speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count) + "+";
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }
            };

            update();
            counterObserver.unobserve(counter);
        }
    });
});

counters.forEach(counter => counterObserver.observe(counter));