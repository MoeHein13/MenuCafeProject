const sections = document.querySelectorAll(
  ".hero, .burnt-cheese , .cold_brew, .coffee, .non-coffee, .matcha-chocolate,.desserts",
);

const navLinks = document.querySelectorAll(".primary-nav a");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         navLinks.forEach((link) =>
//           link.parentElement.classList.remove("active"),
//         );
//         const activeLink = document.querySelector(
//           `.primary-nav a[href="#${entry.target.id}"]`,
//         );
//         if (activeLink) activeLink.parentElement.classList.add("active");
//       }
//     });
//   },
//   {
//     rootMargin: "-100px 0px -60% 0px",
//     threshold: 0,
//   },
// );

// sections.forEach((section) => {
//   console.log(section.id);
//   observer.observe(section);
// });

let isClicking = false;
let scrollTimer = null;

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    isClicking = true;
    /*  clickTarget = link.getAttribute("href").replace("#", ""); */

    // remove all active first
    navLinks.forEach((l) => l.parentElement.classList.remove("active"));
    // immediately set only the clicked one
    link.parentElement.classList.add("active");

    /*  setTimeout(() => {
      isClicking = false;
      clickTarget = "";
    }, 3000); */
  });
});
window.addEventListener("scroll", () => {
  if (isClicking) {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isClicking = false;
    }, 150);
    return;
  }

  let current = "";

  /*  const scrollToBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
 */
  /*  if (scrollToBottom) {
    current = "macha-section";
  } else  */

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 160) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add("active");
    }
  });
});

window.dispatchEvent(new Event("scroll"));
