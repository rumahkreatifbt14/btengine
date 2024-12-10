"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
};

/**
 * toggle navbar
 */

const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        // Jika scroll lebih dari 100px
        header.classList.add("active"); // Tambahkan kelas 'active'
    } else {
        header.classList.remove("active"); // Hapus kelas 'active' jika kembali ke atas
    }
});

// Project

// JavaScript untuk fungsionalitas modal

// Mendapatkan semua tombol yang membuka modal
const openModalButtons = document.querySelectorAll(".open-modal");

// Mendapatkan semua elemen modal
const modals = document.querySelectorAll(".project-modal");

// Mendapatkan semua tombol yang menutup modal
const closeModalButtons = document.querySelectorAll(".project-close-btn");

// Fungsi untuk membuka modal
openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah aksi default link
        const modalID = button.getAttribute("data-modal");
        document.getElementById(modalID).style.display = "block";
    });
});

// Fungsi untuk menutup modal
closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest(".project-modal").style.display = "none";
    });
});

// Menutup modal ketika mengklik di luar konten modal
window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Sweetalerts
const scriptURL = "https://script.google.com/macros/s/AKfycbwt4CHcjNLnJna8TdtE2vtIA2PhJIEWv9PvlIYK1f69W394Zvt3nUwpj1uCL7n9S7IW/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Loading Alert
    Swal.fire({
        title: "Mengirim pesan...",
        didOpen: () => {
            Swal.showLoading();
        },
    });

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => response.json())
        .then((data) => {
            if (data.result === "success") {
                Swal.fire({
                    icon: "success",
                    title: "Pesan berhasil dikirim!",
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Menghapus input setelah pengiriman
                form.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Terjadi kesalahan",
                    text: data.error,
                });
            }
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: error.message,
            });
        });
});

// Scroll reveal animations
ScrollReveal({ distance: "60px", duration: 2500, delay: 100 });

// Target elements, and specify options to create reveal animations
ScrollReveal().reveal(".hero-banner", { delay: 500, origin: "bottom" });
ScrollReveal().reveal("h3, .cta-subtitle", { delay: 500, origin: "top", interval: 200 });
ScrollReveal().reveal(".footer-container", { delay: 500, origin: "top" });
ScrollReveal().reveal(".section-text", { delay: 500, origin: "right" });
ScrollReveal().reveal(".stat-item", { delay: 500, origin: "right", interval: 200 });
ScrollReveal().reveal(".service-card, .project-card, .team-card", { delay: 500, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".hero-subtitle, .about-banner", { delay: 500, origin: "left" });
ScrollReveal().reveal("h1, .h2", { delay: 700, origin: "left", interval: 200 });
ScrollReveal().reveal(".hero-text ", { delay: 900, origin: "left", interval: 200 });
