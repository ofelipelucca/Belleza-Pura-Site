document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".menu-button, .cta-button");

  menuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSectionId = button.value; 
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth", 
          block: "start", 
        });
      }
    });
  });
});
