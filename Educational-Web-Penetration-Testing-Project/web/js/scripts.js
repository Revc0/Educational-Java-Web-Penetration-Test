document.addEventListener('DOMContentLoaded', function () {
    // Print a log to console once the document is fully loaded
    console.log("Web Penetration Testing Project Loaded Successfully!");

    // Functionality for the comment form
    document.getElementById("commentForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let comment = event.target.comment.value;

        // It's not safe to directly insert user input into the DOM as it opens up potential vulnerabilities (e.g., XSS)
        // A safer way would be to create a text node and then append it
        let commentNode = document.createTextNode(comment);
        let commentDiv = document.createElement('div');
        commentDiv.appendChild(commentNode);
        document.getElementById("comments").appendChild(commentDiv);
    });

    // Scroll to top functionality for 'PenTest Project' link in navbar
    let navBrand = document.querySelector(".navbar-brand");
    if (navBrand) {
        navBrand.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    const typeSpeed = 15; // milliseconds per character
    const originalTextContainers = document.querySelectorAll("#type-content > *");
    const texts = Array.from(originalTextContainers).map(el => el.innerHTML);

    // Clear original content
    originalTextContainers.forEach(el => el.innerHTML = "");

    let charIndex = 0;
    let containerIndex = 0;

    const typeInterval = setInterval(() => {
        if (containerIndex >= originalTextContainers.length) {
            clearInterval(typeInterval);
            return;
        }

        const currentContainer = originalTextContainers[containerIndex];
        const currentText = texts[containerIndex];

        if (charIndex < currentText.length) {
            currentContainer.innerHTML += currentText[charIndex];
            charIndex++;
        } else {
            containerIndex++;
            charIndex = 0;
        }
    }, typeSpeed);
});
