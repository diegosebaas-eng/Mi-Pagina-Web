// contacto.js - Funcionalidad de la página de contacto

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener datos del formulario
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Mostrar mensaje de éxito
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('show');

  // Limpiar formulario
  this.reset();

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);

  // Aquí puedes agregar la lógica para enviar el email
  // Por ejemplo, usando EmailJS, FormSubmit, o tu propio backend
  console.log('Datos del formulario:', formData);
});

// Animación de las formas flotantes
const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
  shape.style.animationDelay = `${index * 0.5}s`;
});

// Ocultar indicador de scroll al hacer scroll
window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '0.5';
  }
});