/* =====================================
   Sri Balaji Pest Control Solutions
   Premium Website Script v2
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // Sticky Navbar
  // ==========================

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

      navbar.style.background =
      "rgba(255,255,255,0.98)";

      navbar.style.boxShadow =
      "0 5px 20px rgba(0,0,0,.12)";

    } else {

      navbar.style.background =
      "transparent";

      navbar.style.boxShadow =
      "none";

    }

  });

  // ==========================
  // Scroll Reveal
  // ==========================

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold:0.15
    }
  );

  document
  .querySelectorAll(
  "section,.service-card,.why-card,.testimonial-card,.faq-item,.area-grid div"
  )
  .forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

  });

  // ==========================
  // Counter Animation
  // ==========================

  function animateCounter(counter){

    const target =
    parseInt(counter.dataset.count);

    let current = 0;

    const increment =
    Math.ceil(target / 100);

    const update = () => {

      current += increment;

      if(current >= target){

        counter.innerText = target;

      }else{

        counter.innerText = current;

        requestAnimationFrame(update);

      }

    };

    update();

  }

  const counterObserver =
  new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

      if(entry.isIntersecting){

        animateCounter(entry.target);

        counterObserver.unobserve(
        entry.target
        );

      }

    });

  });

  document
  .querySelectorAll("[data-count]")
  .forEach(counter=>{

    counterObserver.observe(counter);

  });

  // ==========================
  // FAQ Accordion
  // ==========================

  document
  .querySelectorAll(".faq-item")
  .forEach(item=>{

    const question =
    item.querySelector("h3");

    if(!question) return;

    question.style.cursor =
    "pointer";

    question.addEventListener("click",()=>{

      item.classList.toggle("active");

    });

  });

  // ==========================
  // Back To Top Button
  // ==========================

  const topBtn =
  document.createElement("button");

  topBtn.innerHTML = "↑";

  topBtn.id = "topBtn";

  document.body.appendChild(topBtn);

  topBtn.style.cssText = `
  position:fixed;
  right:20px;
  bottom:240px;
  width:55px;
  height:55px;
  border:none;
  border-radius:50%;
  background:#111827;
  color:#fff;
  font-size:22px;
  cursor:pointer;
  display:none;
  z-index:9999;
  box-shadow:0 5px 15px rgba(0,0,0,.2);
  `;

  window.addEventListener("scroll",()=>{

    topBtn.style.display =
    window.scrollY > 400
    ? "block"
    : "none";

  });

  topBtn.addEventListener("click",()=>{

    window.scrollTo({

      top:0,
      behavior:"smooth"

    });

  });

  // ==========================
  // Smooth Scroll
  // ==========================

  document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

      e.preventDefault();

      const target =
      document.querySelector(
      this.getAttribute("href")
      );

      if(target){

        target.scrollIntoView({

          behavior:"smooth"

        });

      }

    });

  });

  // ==========================
  // Footer Year
  // ==========================

  const year =
  document.getElementById("year");

  if(year){

    year.textContent =
    new Date().getFullYear();

  }

  console.log(
  "✅ Sri Balaji Pest Control Loaded"
  );

});
