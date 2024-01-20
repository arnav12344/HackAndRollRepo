function addText() {
    var textBox = document.getElementById('textBox');
    var previousTexts = document.getElementById('previousTexts');

    // Create a new div to hold the text
    var newText = document.createElement('div');
    newText.textContent = textBox.value;

    // Add the new text to the previousTexts div
    previousTexts.appendChild(newText);

    // Clear the text box
    textBox.value = '';
}