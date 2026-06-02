// ===============================
// Sri Balaji Pest Control Solutions
// Premium Website Script
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
'section,.service-card,.testimonial-card'
).forEach(el=>{

    el.classList.add('hidden');

    observer.observe(el);

});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "backToTop";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.left = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#0f7a3d";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

// Show Button On Scroll
window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

// Scroll Top
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Counter Animation
function animateCounter(el,target){

    let count = 0;

    const speed = target / 100;

    const timer = setInterval(()=>{

        count += speed;

        if(count >= target){

            count = target;

            clearInterval(timer);

        }

        el.innerText = Math.floor(count);

    },20);

}

document.querySelectorAll('[data-count]')
.forEach(counter=>{

    const counterObserver =
    new IntersectionObserver(entries=>{

        if(entries[0].isIntersecting){

            animateCounter(
                counter,
                Number(counter.dataset.count)
            );

            counterObserver.disconnect();

        }

    });

    counterObserver.observe(counter);

});

// FAQ Accordion
document.querySelectorAll('.faq-question')
.forEach(question=>{

    question.addEventListener('click',()=>{

        question.classList.toggle('active');

        const answer =
        question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight =
            answer.scrollHeight + 'px';

        }

    });

});

// Navbar Background Change
window.addEventListener('scroll',()=>{

    const nav =
    document.querySelector('nav');

    if(!nav) return;

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(17,24,39,.95)";

        nav.style.backdropFilter =
        "blur(12px)";

    }else{

        nav.style.background =
        "transparent";

    }

});

// Current Year In Footer
const year =
document.getElementById('year');

if(year){

    year.innerText =
    new Date().getFullYear();

}

console.log(
"✅ Sri Balaji Pest Control Solutions Loaded Successfully"
);
