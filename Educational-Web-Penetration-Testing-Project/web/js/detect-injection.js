function checkForScriptInjection(input) {
    const scriptPattern = /<script>|<\/script>|javascript:|alert\(|<\s*img[^>]+onerror\s*=\s*['"]\s*[^'"]*['"]|<\s*a[^>]+href\s*=\s*['"]\s*javascript:/i;
    if (scriptPattern.test(input)) {
        showMatrixAnimation();
    }
}

function showMatrixAnimation() {
    const matrixContainer = document.getElementById('matrix-animation-container');
    matrixContainer.style.display = 'block';

    startMatrixAnimation();
}

const commentForm = document.getElementById('commentForm');
if (commentForm) {
    commentForm.addEventListener('submit', function (event) {
        const commentInput = document.getElementById('commentInput');
        checkForScriptInjection(commentInput.value);
    });
}
