function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("menuIcon");

  menu.classList.toggle("show");
  icon.classList.toggle("active");
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 4000); // Ganti setiap 4 detik
}

// Inisialisasi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  setTimeout(autoSlide, 4000);
});

