// aboutus.html
  document.getElementById("switchLanguageBtn").addEventListener("click", function () {
    const sinhala = document.getElementById("sinhalaContent");
    const english = document.getElementById("englishContent");

    if (sinhala.classList.contains("d-none")) {
      sinhala.classList.remove("d-none");
      english.classList.add("d-none");
      this.textContent = "English";
    } else {
      sinhala.classList.add("d-none");
      english.classList.remove("d-none");
      this.textContent = "සිංහල";
    }
  });

// shedules.js
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements on page load
  animateElements();
  
  // Add click event to registration buttons
  const registerButtons = document.querySelectorAll('.btn-primary');
  registerButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          alert('Registration form will open soon. Please check back later or contact us for more information.');
      });
  });
  
  // Highlight current day's classes
  highlightTodayClasses();
});

// Function to animate elements with fade-in effect
function animateElements() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
      // Add a slight delay to each card for a staggered animation
      setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          // Add transition properties
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          
          // Trigger the animation after a small delay
          setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }, 100);
      }, index * 200);
  });
}

// Function to highlight today's classes
function highlightTodayClasses() {
  const today = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[today.getDay()];
  
  // Get all table rows
  const tableRows = document.querySelectorAll('tbody tr');
  
  // Loop through rows and highlight those matching today's day
  tableRows.forEach(row => {
      const dayCell = row.querySelector('td:first-child');
      
      if (dayCell && dayCell.textContent.trim() === todayName) {
          row.classList.add('table-primary');
          
          // Add a "Today" badge
          const timeCell = row.querySelector('td:last-child');
          if (timeCell) {
              const todayBadge = document.createElement('span');
              todayBadge.className = 'badge bg-danger ms-2';
              todayBadge.textContent = 'Today';
              timeCell.appendChild(todayBadge);
          }
      }
  });
}

// rubik.js
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements on page load
  animateElements();
  
  // Add click event to registration buttons
  const registerButtons = document.querySelectorAll('.btn-primary');
  registerButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          alert('Registration form will open soon. Please check back later or contact us for more information.');
      });
  });
  
  // Highlight current day's classes
  highlightTodayClasses();
});

// Function to animate elements with fade-in effect
function animateElements() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
      // Add a slight delay to each card for a staggered animation
      setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          // Add transition properties
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          
          // Trigger the animation after a small delay
          setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }, 100);
      }, index * 200);
  });
}

// Function to highlight today's classes
function highlightTodayClasses() {
  const today = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[today.getDay()];
  
  // Get all table rows
  const tableRows = document.querySelectorAll('tbody tr');
  
  // Loop through rows and highlight those matching today's day
  tableRows.forEach(row => {
      const dayCell = row.querySelector('td:first-child');
      
      if (dayCell && dayCell.textContent.trim() === todayName) {
          row.classList.add('table-primary');
          
          // Add a "Today" badge
          const timeCell = row.querySelector('td:last-child');
          if (timeCell) {
              const todayBadge = document.createElement('span');
              todayBadge.className = 'badge bg-danger ms-2';
              todayBadge.textContent = 'Today';
              timeCell.appendChild(todayBadge);
          }
      }
  });
}

// Add scroll animation to transition from Rubik's cube to content
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const rubikContainer = document.querySelector('.rubik-container');
  
  // Parallax effect for the Rubik's container
  if (rubikContainer) {
      const offset = scrollPosition * 0.4;
      rubikContainer.style.backgroundPositionY = `-${offset}px`;
  }
  
  // Also affect the cube's rotation speed based on scroll
  const cube = document.querySelector('.cube');
  if (cube && scrollPosition > 50) {
      // Slow down the animation as user scrolls down
      const newDuration = 15 + (scrollPosition / 100);
      cube.style.animationDuration = `${newDuration}s, 5s`;
  }
});

//..........................................
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the Rubik's Cube
  initRubiksCube();
});

function initRubiksCube() {
  // Get all grid items
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Create an array of artistic colors similar to the image
  const artisticColors = [
      '#FF5252', // Red
      '#FF9800', // Orange
      '#FFEB3B', // Yellow
      '#4CAF50', // Green
      '#2196F3', // Blue
      '#9C27B0', // Purple
      '#00BCD4', // Cyan
      '#FF4081', // Pink
      '#8BC34A', // Light Green
      '#FFC107', // Amber
      '#3F51B5', // Indigo
      '#009688'  // Teal
  ];
  
  // Apply random colors to some of the grid items to make it look scrambled
  // This creates the artistic effect similar to the reference image
  gridItems.forEach((item, index) => {
      // Create inner elements for artistic effect - similar to the image
      if (Math.random() > 0.7) {
          // Add some artistic elements to certain squares
          const artElement = document.createElement('div');
          artElement.classList.add('art-element');
          artElement.style.position = 'absolute';
          artElement.style.top = '50%';
          artElement.style.left = '50%';
          artElement.style.transform = 'translate(-50%, -50%)';
          
          // Create different artistic elements based on position
          const artType = Math.floor(Math.random() * 4);
          
          switch(artType) {
              case 0:
                  // Small circle
                  artElement.style.width = '40%';
                  artElement.style.height = '40%';
                  artElement.style.borderRadius = '50%';
                  artElement.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  break;
              case 1:
                  // Line
                  artElement.style.width = '70%';
                  artElement.style.height = '2px';
                  artElement.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                  break;
              case 2:
                  // Small square
                  artElement.style.width = '30%';
                  artElement.style.height = '30%';
                  artElement.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  break;
              case 3:
                  // Cross
                  artElement.style.width = '60%';
                  artElement.style.height = '60%';
                  artElement.style.backgroundImage = 'linear-gradient(to bottom right, transparent 45%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.3) 55%, transparent 55%), linear-gradient(to bottom left, transparent 45%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0.3) 55%, transparent 55%)';
                  break;
          }
          
          item.appendChild(artElement);
      }
  });
  
  // Add mouse interaction for a more engaging experience
  const cube = document.querySelector('.cube');
  const scene = document.querySelector('.scene');
  let isMouseDown = false;
  let startX, startY;
  let rotationX = 0, rotationY = 0;
  let currentRotationX = 0, currentRotationY = 0;
  
  // Add a special color change effect when hovering over the cube
  scene.addEventListener('mouseenter', function() {
      // Pause the animation when hovering
      cube.style.animationPlayState = 'paused';
      
      // Extract current transform
      const currentTransform = getComputedStyle(cube).transform;
      cube.style.transform = currentTransform;
      cube.style.animation = 'none';
      
      // Add a glowing effect
      cube.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
  });
  
  scene.addEventListener('mouseleave', function() {
      // Resume the animation when no longer hovering
      cube.style.animation = 'rotate 15s infinite linear, glow 5s infinite ease-in-out';
      cube.style.transform = 'translateZ(-100px)';
  });
  
  // Create starry background effect
  createStarryBackground();
}

function createStarryBackground() {
  const container = document.querySelector('.rubik-container');
  const starsCount = 50;
  
  for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 2 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.8 + 0.2;
      
      // Apply styles
      star.style.position = 'absolute';
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity;
      star.style.borderRadius = '50%';
      star.style.backgroundColor = 'white';
      star.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
      
      // Add animation
      star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite`;
      
      container.appendChild(star);
  }
  
  // Add twinkle animation
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
      @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
      }
  `;
  document.head.appendChild(styleSheet);
}