let animationRunning = false;


function startMatrixAnimation() {
    if (animationRunning) {
        return;
    }

    var canvas = document.createElement("canvas");
    canvas.id = "matrix-animation";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:,.<>?";
    var fontSize = 14;
    var columns = canvas.width / fontSize;
    var drops = [];

    for (var x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * canvas.height);
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px arial";

        for (var i = 0; i < drops.length; i++) {
            var text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50);

    animationRunning = true;
}

function stopMatrixAnimation() {
    const canvas = document.getElementById('matrix-animation');
    if (canvas) {
        document.body.removeChild(canvas);
    }

    animationRunning = false;
}

const stopButton = document.getElementById('stopAnimationButton');
if (stopButton) {
    stopButton.addEventListener('click', function () {
        if (animationRunning) {
            stopMatrixAnimation();
        }
    });
}

