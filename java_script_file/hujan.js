const rainContainer = document.querySelector('.rain');

// Menambahkan tetesan hujan secara acak
function createRainDrops() {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  
  // Set posisi acak untuk tetesan hujan
  drop.style.left = `${Math.random() * 100}vw`; // Posisi horizontal
  drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Durasi acak antara 0.5s dan 1s
  
  rainContainer.appendChild(drop);
  
  // Hapus tetesan setelah animasi selesai
  drop.addEventListener('animationend', () => {
    drop.remove();
  });
}

// Buat tetesan hujan secara berkala
setInterval(createRainDrops, 100); // Setiap 100ms

// Fungsi untuk memicu petir
function lightningEffect() {
  const lightning = document.querySelector('.lightning');
  
  // Menampilkan petir secara acak pada interval acak
  setInterval(() => {
    let randomDuration = Math.random() * (500) + 100; // Durasi petir random antara 100ms - 500ms
    let randomDelay = Math.random() * (1000); // Waktu delay acak

    // Reset animasi dan memulai ulang setiap kali petir muncul
    lightning.style.animation = 'none'; // Hapus animasi yang sedang berjalan
    lightning.offsetHeight; // Memaksa reflow untuk memulai animasi ulang
    lightning.style.animation = `lightning-flash ${randomDuration}ms linear`;

    lightning.style.display = "block"; // Menampilkan petir

    // Petir hilang kembali setelah beberapa detik
    setTimeout(() => {
      lightning.style.display = "none"; // Menyembunyikan petir setelah beberapa detik
    }, randomDuration + randomDelay); // Waktu tampil petir

  }, Math.random() * (5000) + 3000); // Interval acak untuk setiap kilatan petir
}

// Memulai efek petir
lightningEffect();