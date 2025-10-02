// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, { threshold: 0.13 });
faders.forEach(f => observer.observe(f));

// Carousel Galeri Foto aesthetic
const gallery = document.querySelector('.carousel-gallery');
if (gallery) {
    const track = gallery.querySelector('.carousel-track');
    const images = gallery.querySelectorAll('img');
    const btnLeft = gallery.querySelector('.carousel-btn.left');
    const btnRight = gallery.querySelector('.carousel-btn.right');
    const indicators = gallery.querySelector('.carousel-indicators');
    let idx = 0;

    // Indikator bulat
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
    // Swipe support (biar bisa geser pakai jari di HP)
    let startX = null;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    track.addEventListener('touchend', e => {
        if(startX === null) return;
        let endX = e.changedTouches[0].clientX;
        if(endX - startX > 50) btnLeft.onclick();
        else if(startX - endX > 50) btnRight.onclick();
        startX = null;
    });
}

// Accordion (kalau masih ada)
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.onclick = function() {
    const content = this.nextElementSibling;
    content.classList.toggle('open');
    if (content.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  }
});

// Scroll to Top Button
const toTop = document.getElementById('toTop');
window.onscroll = () => {
  if (window.scrollY > 200) toTop.style.display = 'block';
  else toTop.style.display = 'none';
};
toTop.onclick = () => { window.scrollTo({top: 0, behavior: 'smooth'}); };
