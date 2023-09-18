document.addEventListener("DOMContentLoaded", function() {
    const text = "In the vast expanse of the digital universe, hacking isn't merely about exploiting systems. It's a reflection of the age-old dance between builder and breaker. To be a programmer is to understand this delicate balance. Ensuring security is not just a task; it's an ethical responsibility. For in this realm, knowledge is power, and power must always be wielded responsibly.";
    const element = document.getElementById("philosophical-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 40);  // Adjust typing speed here
        }
    }

    type();
});
