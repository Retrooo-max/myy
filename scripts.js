// Smooth scroll untuk navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  





// Ambil elemen tombol dan pop-up
const contactBtn = document.getElementById('contact-btn');
const closePopupBtn = document.getElementById('close-popup');
const popup = document.getElementById('contact-popup');

// Fungsi untuk menampilkan pop-up saat tombol "Kontak Saya" diklik
contactBtn.addEventListener('click', function() {
  popup.style.display = 'flex'; // Tampilkan pop-up dengan display flex
});

// Fungsi untuk menyembunyikan pop-up saat tombol "Tutup" diklik
closePopupBtn.addEventListener('click', function() {
  popup.style.display = 'none'; // Sembunyikan pop-up
});

// Menutup pop-up jika area di luar pop-up diklik
window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none'; // Sembunyikan pop-up jika area luar pop-up diklik
  }
});
