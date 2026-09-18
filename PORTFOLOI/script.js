

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "💡";

    } else {

        themeBtn.textContent = "💡";

    }

});


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const animatedSections =
    document.querySelectorAll(".section, .contact-section");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedSections.forEach(function (section) {

    observer.observe(section);

});

