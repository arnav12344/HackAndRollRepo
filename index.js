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

function bruh(){
    textcontent=document.getElementById('textBox').value
    console.log(textcontent)
    chatGptSpeaker(textcontent)
    
}

var text = ""
const token = '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'
const maxRetries = 3;
let retryCount = 0;

function chatGptSpeaker(name) {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Reverse Autocorrect this text-  "+ name}]
        })
    }).then(response => {
        if (response.status === 429 && retryCount < maxRetries) {
            retryCount++;
            // Retry after a delay (e.g., 1 second)
            setTimeout(() => chatGptSpeaker(name), 1000);
        } else {
            return response.json();
        }
    }).then(data => {
        if (data) {
            text = data.choices[0].message.content;
            console.log(text);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

function startGame(mode) {
    // Add logic to start the game based on the selected mode
    alert('Game starting in ' + mode + ' player mode!');
    let startbtn=document.querySelector("#button")
    startbtn.style.display="none"
}




