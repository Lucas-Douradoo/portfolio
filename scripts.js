document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;

    for (const link of navLinks) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }

    toggleThemeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
    });
});
