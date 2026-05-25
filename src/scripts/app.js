"use strict";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* GSAP */
function initGSAPAnimations() {
    document.querySelectorAll(".col__img--left, .col--left").forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            xPercent: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });
    });

    document.querySelectorAll(".col__img--right, .col--right").forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            xPercent: 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();
});

/* MENU */

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
