// animations.js - Módulo de animaciones

/**
 * Anima las formas flotantes del hero
 */
export function animateFloatingShapes() {
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 0.5}s`;
  });
}

/**
 * Efecto parallax al hacer scroll
 */
export function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');
    
    if (hero && content) {
      content.style.transform = `translateY(${scrolled * 0.1}px)`;
      hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
  });
}

/**
 * Controla la visibilidad del indicador de scroll
 */
export function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  window.addEventListener('scroll', () => {
    scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
  });
}

/**
 * Anima la entrada de elementos principales
 */
export function animatePageElements() {
  const selectors = [
    '.badge',
    '.main-title',
    '.tagline',
    '.description',
    '.features',
    '.cta-container',
    '.tech-stack'
  ];

  selectors.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.5s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 * index);
  });
}

/**
 * Efectos hover para las cards de features
 */
export function initFeatureHoverEffects() {
  const features = document.querySelectorAll('.feature');
  
  features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
      feature.style.transform = 'translateY(-5px)';
    });
    
    feature.addEventListener('mouseleave', () => {
      feature.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Animación para botones CTA
 */
export function initCTAButtonAnimation() {
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
}

/**
 * Observer para animar elementos cuando entran al viewport
 */
export function initViewportObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('.feature, .tech-stack span');
  elements.forEach(element => observer.observe(element));
}

/**
 * Inicializa todas las animaciones
 */
export function initAllAnimations() {
  console.log('🎬 Inicializando animaciones...');
  
  animateFloatingShapes();
  initParallaxEffect();
  initScrollIndicator();
  animatePageElements();
  initFeatureHoverEffects();
  initCTAButtonAnimation();
  initViewportObserver();
  
  console.log('✅ Animaciones inicializadas');
}