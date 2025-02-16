// Ambil elemen tombol dan teks
const loveButton = document.querySelector('.love-button');
const greeting = document.querySelector('.greeting');

// Tambahkan event listener ke tombol
loveButton.addEventListener('click', () => {
    // Sembunyikan tombol
    loveButton.style.display = 'none';

    // Tampilkan teks
    greeting.classList.add('show');

    // Buat balon love
    const colors = ['#0000FF', '#00FFFF', '#006400', '#FFD700', '#ff0000', '#ff6f61', '#ffcc00', '#00ccff', '#ff00cc', '#00ff99'];
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = `${Math.random() * 4 + 3}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(balloon);

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
});
