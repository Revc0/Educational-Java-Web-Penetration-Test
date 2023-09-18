function checkAnswer() {
    const radios = document.getElementsByName('xssQuestion'); // Change to 'xssQuestion'
    const correctValue = 'security'; // Change to the correct answer value

    for (let i = 0; i < radios.length; i++) {
        const currentLabel = document.querySelector(`label[for="${radios[i].id}"]`);
        const currentValue = radios[i].value;

        if (radios[i].checked) {
            if (currentValue === correctValue) {
                currentLabel.style.color = '#00FF00';
                startMatrixAnimation();
            } else {
                currentLabel.style.color = 'red';
            }
        } else {
            currentLabel.style.color = '';
        }
    }
}

