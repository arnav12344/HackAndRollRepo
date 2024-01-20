let numOfPlayers;
let currentPlayer = 1;
let prompts = [];

function startGame() {
    numOfPlayers = document.getElementById('players').value;
    if (numOfPlayers >= 1) {
        showPromptPage();
    } else {
        alert('Please enter a valid number of players.');
    }
}

function showPromptPage() {
    
    document.body.innerHTML = `
        <div class="container">
            <h1>Psycho Whisper - Player ${currentPlayer}</h1>
            <label for="prompt">Enter a prompt:</label>
            <input type="text" id="prompt">
            <button onclick="jumblePrompt()">Whisper</button>
        </div>
    `;
}

function jumblePrompt() {
    var promptInput = document.getElementById('prompt').value;
    // Call your function to jumble the prompt here (not implemented in this example).
    prompts.push(promptInput);

    if (currentPlayer < numOfPlayers) {
        currentPlayer++;
        showPromptPage();
    } else {
        showGuessPage();
    }
}

function showGuessPage() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Psycho Whisper - Guesses</h1>
            <ul>
                ${prompts.map((prompt, index) => `<li>${index + 1}. ${prompt}</li>`).join('')}
            </ul>
            <button onclick="finishGame()">Finish</button>
        </div>
    `;
}
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

function finishGame() {
    alert('Game finished! Check the guesses on the page.');
    // Additional logic for finishing the game goes here.
}