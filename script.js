// Get elements
const playPauseBtn1 = document.getElementById('play-pause-btn1');
const playPauseBtn2 = document.getElementById('play-pause-btn2');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const backgroundMusic = document.getElementById('background-music');

// Add event listeners for play/pause buttons
playPauseBtn1.addEventListener('click', () => {
  if (video1.paused) {
    video1.play();
    playPauseBtn1.textContent = 'Pause';
  } else {
    video1.pause();
    playPauseBtn1.textContent = 'Play';
  }
});

playPauseBtn2.addEventListener('click', () => {
  if (video2.paused) {
    video2.play();
    playPauseBtn2.textContent = 'Pause';
  } else {
    video2.pause();
    playPauseBtn2.textContent = 'Play';
  }
});

// Play background music automatically
backgroundMusic.play();

// Add event listener to toggle background music
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BODY') {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
});

// Add animation effects for fade-in
const fadeInSection = document.querySelectorAll('.birthday-section, #happy-birthday, #footer-text');
fadeInSection.forEach((element) => {
  element.style.opacity = 0;
  element.addEventListener('animationend', () => {
    element.style.opacity = 1;
  });
});

// Add typewriter effect for birthday quotes
const birthdayQuotes = document.querySelectorAll('.birthday-quote-1,.birthday-quote-2,.birthday-quote-3,.birthday-quote-4,.birthday-quote-5,.birthday-quote-6');
birthdayQuotes.forEach((quote) => {
  let text = quote.textContent;
  let charArray = text.split('');
  let currentIndex = 0;

  quote.textContent = '';

  function typeWriter() {
    quote.textContent += charArray[currentIndex];
    currentIndex++;

    if (currentIndex < charArray.length) {
      setTimeout(typeWriter, 50);
    }
  }

  // Add a flag to check if the animation has already been triggered
  let animationTriggered = false;

  // Add an event listener to trigger the animation when the element comes into view
  window.addEventListener('scroll', () => {
    if (isInViewport(quote) &&!animationTriggered) {
      animationTriggered = true;
      typeWriter();
    }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}