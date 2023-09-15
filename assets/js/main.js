const scrollAnimations = document.querySelectorAll("[is-scroll='true']");
const firstSection = document.getElementsByClassName("first")[0];
const navBar = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", () => {
    const firstSecRect = firstSection.getBoundingClientRect().top;

    if (firstSecRect <= 54) {
        navBar.classList.add("first-sec");
    } else {
        navBar.classList.remove("first-sec");
    }

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

const arrow = document.getElementById("arrow");

arrow.addEventListener("click", (e) => {
    scrollInto("cell-membrane");
});

function learnMore() {
    window.location.href = "./analogies.html";
}