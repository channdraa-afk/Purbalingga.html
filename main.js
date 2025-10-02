// Carousel Galeri Foto dengan indikator
const gallery = document.querySelector('.carousel-gallery');
if (gallery) {
    const track = gallery.querySelector('.carousel-track');
    const images = gallery.querySelectorAll('img');
    const btnLeft = gallery.querySelector('.carousel-btn.left');
    const btnRight = gallery.querySelector('.carousel-btn.right');
    const indicators = gallery.querySelector('.carousel-indicators');
    let idx = 0;

    // Buat indikator bulat
    indicators.innerHTML = '';
    images.forEach((_, i) => {
        let dot = document.createElement('div');
        dot.className = 'indicator' + (i === 0 ? ' active' : '');
        dot.onclick = () => { idx = i; updateGallery(); };
        indicators.appendChild(dot);
    });

    function updateGallery() {
        track.style.transform = `translateX(-${idx * 100}%)`;
        indicators.querySelectorAll('.indicator').forEach((dot, i) =>
            dot.classList.toggle('active', i === idx)
        );
    }

    btnLeft.onclick = () => {
        idx = (idx - 1 + images.length) % images.length;
        updateGallery();
    };
    btnRight.onclick = () => {
        idx = (idx + 1) % images.length;
        updateGallery();
    };
}

// Script lain (fade-in, accordion, scrollToTop) tetap sama seperti sebelumnya.
