window.addEventListener("load", () => {
  const nav = document.querySelector(".banner nav");
  const animationDuration = 1600; // Sesuaikan dengan durasi animasi mask (dalam ms)

  // Sembunyikan nav saat memuat
  nav.classList.add("hidden");

  // Tampilkan nav setelah animasi selesai
  setTimeout(() => {
    nav.classList.remove("hidden");
  }, animationDuration);
});
