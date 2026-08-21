const textInput = document.getElementById('text-input');
const charCounter = document.getElementById('char-count');

const MAX_CHARS = 50;

textInput.addEventListener('input', (e) => {
    let currentText = e.target.value;


    if (currentText.length > MAX_CHARS) {
        currentText = currentText.slice(0, MAX_CHARS);
        e.target.value = currentText;
    }

    const currentLength = currentText.length;


    charCounter.innerText = `Character Count: ${currentLength}/${MAX_CHARS}`;

    if (currentLength === MAX_CHARS) {
        charCounter.style.color = 'red';
    } else {
        charCounter.style.color = ''; 
    }
});
