function checkAnswer() {
    const radios = document.getElementsByName('sqlInjectionQuestion');
    const correctValue = 'parameterizedQueries';

    for (let i = 0; i < radios.length; i++) {
        const currentLabel = document.querySelector(`label[for="${radios[i].id}"]`);
        const currentValue = radios[i].value;

        if (radios[i].checked) {
            if (currentValue === correctValue) {
                currentLabel.style.color = '#00FF00';
                startMatrixAnimation;
            } else {
                currentLabel.style.color = 'red';
            }
        } else {
            currentLabel.style.color = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quizFeedback').textContent = '';
});
