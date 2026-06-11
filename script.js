```javascript
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS Animations
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic'
    });

    // Typing Animation Logic
    const texts = [
        "Embedded Systems Engineer",
        "Control Theory Specialist",
        "AI & ML Enthusiast",
        "Mechatronics Designer"
    ];

    let textIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function type() {
        const currentText = texts[textIdx];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                isDeleting = false;
                textIdx = (textIdx + 1) % texts.length;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause at the end
                return;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
});
```
