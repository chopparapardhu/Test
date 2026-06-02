/* =====================================
   Sri Balaji Pest Control Solutions
   Premium Website Script
===================================== */

// ===== Sticky Navbar =====

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 80) {

navbar.style.background = "rgba(255,255,255,0.98)";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";

} else {

navbar.style.background = "rgba(255,255,255,0.95)";
navbar.style.boxShadow = "none";

}

});

// ===== Scroll Reveal Animation =====

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

document
.querySelectorAll(
"section,.service-card,.why-card,.testimonial-card,.faq-item,.area-grid div"
)
.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});

// ===== Counter Animation =====

function animateCounter(counter) {

const target = +counter.getAttribute("data-count");

let count = 0;

const increment = target / 100;

const updateCounter = () => {

if (count < target) {

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText = target;

}

};

updateCounter();

}

const counterObserver = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{
threshold: 0.5
}

);

document.querySelectorAll("[data-count]").forEach((counter) => {

counterObserver.observe(counter);

});

// ===== FAQ Accordion =====

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

const question = item.querySelector("h3");

question.style.cursor = "pointer";

question.addEventListener("click", () => {

faqItems.forEach((faq) => {

if (faq !== item) {

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

// ===== Back To Top Button =====

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "170px";
topBtn.style.right = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#111827";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

topBtn.style.display = "block";

} else {

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});

// ===== Smooth Anchor Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// ===== Current Year Auto Footer =====

const yearSpan = document.getElementById("year");

if (yearSpan) {

yearSpan.textContent = new Date().getFullYear();

}

console.log(
"✅ Sri Balaji Pest Control Solutions Loaded Successfully"
);
