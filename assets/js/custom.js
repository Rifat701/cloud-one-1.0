/// NAVBAR ///
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('-right-full')) {
    menu.classList.remove('-right-full');
    menu.classList.add('right-0');
  } else {
    menu.classList.remove('right-0');
    menu.classList.add('-right-full');
  }
}

/// FAQ ///
function toggleAccordion(id) {
  // Get the content element
  const content = document.getElementById(id);

  // Get the button that triggered this
  const button = content.previousElementSibling;
  const svg = button.querySelector('svg');

  // If opening this accordion
  if (content.classList.contains('hidden')) {
    // First close any open accordions
    const allContents = document.querySelectorAll('[id^="accordion"]');
    allContents.forEach((el) => {
      if (!el.classList.contains('hidden')) {
        el.style.maxHeight = '0px';
        el.classList.add('hidden');
        const otherButton = el.previousElementSibling;
        const otherSvg = otherButton.querySelector('svg');
        otherSvg.style.transform = 'rotate(0)';
      }
    });

    // Then open this accordion
    content.classList.remove('hidden');
    content.style.maxHeight = content.scrollHeight + 'px';
    svg.style.transform = 'rotate(180deg)';
  } else {
    // Closing this accordion
    content.style.maxHeight = '0px';
    setTimeout(() => {
      content.classList.add('hidden');
    }, 200); // Match this with the transition duration
    svg.style.transform = 'rotate(0)';
  }
}

/// COUNTER ///
const counterElement = document.getElementById('counter');
const targetNumber = 36;
const duration = 2000; // 2 seconds
const steps = 60;
const increment = targetNumber / steps;
let current = 0;

function updateCounter() {
  current += increment;
  if (current > targetNumber) {
    current = targetNumber;
  }
  counterElement.textContent = Math.round(current);

  if (current < targetNumber) {
    requestAnimationFrame(updateCounter);
  }
}

// Start the counter when element is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      updateCounter();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(counterElement);

/// PROGRESS COUNTER ///
function createProgressCounter(elementId, targetValue) {
  const element = document.getElementById(elementId);
  const duration = 2000; // 2 seconds
  const steps = 60;
  const increment = targetValue / steps;
  let current = 0;
  let startTime = null;

  function updateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);

    current = targetValue * percentage;
    element.textContent = Math.round(current) + '%';

    if (progress < duration) {
      requestAnimationFrame(updateProgress);
    }
  }

  // Start counter when element is in view
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(updateProgress);
        entry.target.disconnect();
      }
    });
  }).observe(element);
}

// Initialize both progress counters
createProgressCounter('progress1', 65);
createProgressCounter('progress2', 75);

/// SLIDER ///
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.testimonial-slide');
  const images = document.querySelectorAll('.testimonial-image');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  let currentIndex = 0;

  function showSlide(index) {
    // Hide all slides and images
    slides.forEach((slide) => slide.classList.remove('active'));
    images.forEach((image) => image.classList.remove('active'));

    // Show current slide and image
    slides[index].classList.add('active');
    images[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Add click event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Optional: Auto-play
  setInterval(nextSlide, 5000);
});
