const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('overlay');
 
// Abre y cierra el drawer al hacer clic en el botón hamburger
hamburger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  overlay.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
});
 
// Cierra el drawer al hacer clic en el overlay oscuro
overlay.addEventListener('click', closeDrawer);
 
function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.classList.remove('open');
}
 
// Maneja el envío del formulario de contacto
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '¡Mensaje enviado! ✓';
  btn.style.background = '#4a8c55';
  setTimeout(() => {
    btn.textContent = 'Enviar mensaje →';
    btn.style.background = '';
  }, 3000);
}