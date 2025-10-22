// Get elements
const openingScreen = document.getElementById('openingScreen');
const openButton = document.getElementById('openButton');
const wishCard = document.getElementById('wishCard');

// Add click event to open button
openButton.addEventListener('click', () => {
    // Add sound effect (optional - uncomment if you add an audio file)
    // const audio = new Audio('click-sound.mp3');
    // audio.play();
    
    // Hide opening screen
    openingScreen.classList.add('hidden');
    
    // Show wish card after a short delay
    setTimeout(() => {
        wishCard.classList.add('active');
        // Ensure scroll to top of card
        wishCard.scrollTop = 0;
        createConfetti();
    }, 800);
});

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#fbbf24', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Add fall animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add hover effect to button
openButton.addEventListener('mouseenter', () => {
    openButton.style.transform = 'scale(1.1) translateY(-5px)';
});

openButton.addEventListener('mouseleave', () => {
    openButton.style.transform = 'scale(1) translateY(0)';
});

// Allow right click and inspect - removed prevention
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

// Add keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !openingScreen.classList.contains('hidden')) {
        openButton.click();
    }
});

// Create floating hearts effect
function createFloatingHearts() {
    setInterval(() => {
        if (wishCard.classList.contains('active')) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.opacity = '0.7';
            heart.style.animation = 'floatUp 4s ease-in-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }, 2000);
}

// Add float up animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Start floating hearts
createFloatingHearts();

// Add sparkle effect on cursor (optional)
document.addEventListener('mousemove', (e) => {
    if (wishCard.classList.contains('active') && Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '20px';
        sparkle.style.animation = 'fadeOut 1s ease-out';
        sparkle.style.zIndex = '9999';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Add fade out animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeOut {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fadeStyle);

console.log('🪔 Happy Diwali & Bhai Dooj! 🪔');
