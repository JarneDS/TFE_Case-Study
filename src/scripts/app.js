"use strict";

var menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("menu--open");
};

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sideNav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.sideNav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove("active"));

            if (link) link.classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));
