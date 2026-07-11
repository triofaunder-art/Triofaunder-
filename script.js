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
// Loader
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hide");
});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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

// AI Assistant
function askAI() {

    let question = document.getElementById("userQuestion").value.toLowerCase();
    let answer = "";

    if (question.includes("web")) {
        answer = "We provide professional Website Design & Development services.";
    }
    else if (question.includes("graphic")) {
        answer = "We design Logos, Posters, Banners and Social Media Graphics.";
    }
    else if (question.includes("video")) {
        answer = "We edit YouTube videos, Shorts, Reels and Ads.";
    }
    else if (question.includes("seo")) {
        answer = "We provide complete SEO services to improve website ranking.";
    }
    else if (question.includes("app")) {
        answer = "We develop Android apps and business applications.";
    }
    else if (question.includes("price") || question.includes("pricing")) {
        answer = "Our plans start from ₹999. Contact us for a custom quote.";
    }
    else {
        answer = "Please contact Trio Founder on WhatsApp or Email for more details.";
    }

    document.getElementById("aiAnswer").innerHTML = answer;
}
function askAI() {

    const question = document.getElementById("userQuestion").value.toLowerCase().trim();
    const answerBox = document.getElementById("aiAnswer");

    if(question === ""){
        answerBox.innerHTML = "Please type your question first.";
        return;
    }

    let answer = "";

    if(question.includes("web")){
        answer = "🌐 We create modern business websites, landing pages and portfolio websites.";
    }
    else if(question.includes("graphic") || question.includes("logo")){
        answer = "🎨 We provide Logo Design, Banner Design, Posters, Social Media Posts and Branding.";
    }
    else if(question.includes("video")){
        answer = "🎬 We edit YouTube videos, Instagram Reels, Shorts and Ads.";
    }
    else if(question.includes("seo")){
        answer = "📈 We provide SEO services to improve your Google ranking.";
    }
    else if(question.includes("app")){
        answer = "📱 We build Android Apps and Business Applications.";
    }
    else if(question.includes("price") || question.includes("pricing") || question.includes("cost")){
        answer = "💰 Our plans start from ₹999. Contact us for a custom quotation.";
    }
    else if(question.includes("contact") || question.includes("phone")){
        answer = "📞 Phone: +91 7065237526 <br>📧 Email: triofaunder@gmail.com";
    }
    else if(question.includes("whatsapp")){
        answer = "💬 WhatsApp us at +91 7065237526";
    }
    else{
        answer = "🤖 Sorry, I don't understand that yet. Please contact Trio Founder on WhatsApp or Email.";
    }

    answerBox.innerHTML = answer;
}