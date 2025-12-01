// main.js - Punto de entrada principal
import { initAllAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Iniciando aplicación Diego Lima Portfolio...');
  
  // Inicializar todas las animaciones
  initAllAnimations();
  
  // Inicializar menú móvil
  initMobileMenu();
  
  // Inicializar smooth scroll
  initSmoothScroll();
  
  // Inicializar header scroll effect
  initHeaderScroll();

  // Inicializar modal de vista previa
  initPreviewModal();
  
  console.log('✅ Aplicación inicializada correctamente');
});

/**
 * Inicializa el menú móvil
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !mainNav) return;

  // Toggle menú
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');
  });

  // Cerrar menú al hacer click en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 968) {
        mainNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('bi-list');
        icon.classList.remove('bi-x');
      }
    });
  });
}

/**
 * Inicializa smooth scroll para enlaces internos
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = 70;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Actualizar active link
        updateActiveLink(link);
      }
    });
  });
}

/**
 * Actualiza el enlace activo en la navegación
 */
function updateActiveLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

/**
 * Efecto del header al hacer scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Actualizar active link basado en la sección visible
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Inicializa el modal de vista previa para proyectos
 */
function initPreviewModal() {
  const modal = document.getElementById('previewModal');
  const closeBtn = document.getElementById('closePreview');
  const previewFrame = document.getElementById('previewFrame');
  const previewTitle = document.getElementById('previewTitle');
  const openFullPageBtn = document.getElementById('openFullPage');
  const previewLinks = document.querySelectorAll('.preview-link');

  if (!modal || !closeBtn || !previewFrame) return;

  // Abrir modal al hacer clic en "Vista Previa"
  previewLinks.forEach(link => {
    link.addEventListener('click', () => {
      const pageUrl = link.getAttribute('data-page');
      const pageTitle = link.getAttribute('data-title');
      
      if (pageUrl) {
        previewFrame.src = pageUrl;
        previewTitle.textContent = pageTitle || 'Vista Previa';
        openFullPageBtn.href = pageUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
      }
    });
  });

  // Cerrar modal
  const closeModal = () => {
    modal.classList.remove('active');
    previewFrame.src = ''; // Limpiar iframe
    document.body.style.overflow = ''; // Restaurar scroll
  };

  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  console.log('🔍 Modal de vista previa inicializado');
}

