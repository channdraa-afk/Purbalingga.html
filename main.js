// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, { threshold: 0.13 });
faders.forEach(f => observer.observe(f));

// Accordion
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

// Carousel
const track = document.querySelector('.carousel-track');
const imgs = track ? track.children : [];
let idx = 0;
function updateCarousel() {
  if(!track) return;
  track.style.transform = `translateX(-${idx * 100}%)`;
}
document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.onclick = function() {
    if(this.classList.contains('left')) idx = (idx-1+imgs.length)%imgs.length;
    else idx = (idx+1)%imgs.length;
    updateCarousel();
  }
});
