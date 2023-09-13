const scrollAnimations = document.querySelectorAll("[is-scroll='true']");

window.addEventListener("scroll", () => {
    Array.from(scrollAnimations).forEach((element) => {
        const rect = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rect < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});

function changeTheme(theme) {
    const element = document.documentElement;
    
    if (theme === "dark") {
        element.setAttribute("data-bs-theme", "dark");
    } else {
        element.setAttribute("data-bs-theme", "light");
    }
}

function scrollInto(id) {
    const yOffset = -50;
    const element = document.getElementById(id);
    const elementY = element.getBoundingClientRect().top + yOffset;

    window.scroll({
        top: elementY,
        behavior: "smooth"
    });
}