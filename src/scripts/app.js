"use strict";

var menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("menu--open");
};

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sideNav a");
const navLinksIndex = document.querySelectorAll(".sideNavIndex a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.sideNav a[href="#${id}"]`);
        const linkIndex = document.querySelector(`.sideNavIndex a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove("active"));
            navLinksIndex.forEach(a => a.classList.remove("active"));

            if (link) link.classList.add("active");
            if (linkIndex) linkIndex.classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));
