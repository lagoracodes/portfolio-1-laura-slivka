document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const removeActiveClasses = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  };

  const addActiveClass = (id) => {
    removeActiveClasses();
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          addActiveClass(id);
        }
      });
    },
    { threshold: 0.8 }
  );

  sections.forEach((section) => observer.observe(section));
});
