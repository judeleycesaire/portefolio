// Filtrage
function filterPhotos(category) {
    document.querySelectorAll(".photo-box").forEach(photo => {
        photo.style.display =
            category === "all" || photo.classList.contains(category)
            ? "block" : "none";
    });
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".photo-box img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Menu actif
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});





document.addEventListener("DOMContentLoaded", () => {

    // ===== COMPÉTENCES : ANIMATION DES BARRES =====
    const skillSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const percent = bar.getAttribute("data-percent");
                    bar.style.width = percent + "%";
                });
                observer.unobserve(skillSection);
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(skillSection);

});


console.log(percent);
