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

async function jumblePrompt() {
    var promptInput = document.getElementById('prompt').value;
    let prevAnswer = null;
    let jumbleprompt=  await chatGptSpeaker(promptInput).then((result) => {
        // Do something with the result
        prompts.push(result);
        prevAnswer = result;
        console.log('Result:', result);
    });
    // Call your function to jumble the prompt here (not implemented in this example).
    

    if (currentPlayer < numOfPlayers) {
        currentPlayer++;
        showPromptPage();
        if (currentPlayer>1){
            document.body.innerHTML=`<div class="container">
            <h1>Psycho Whisper - Player ${currentPlayer}</h1>
            <h3>Jumbled prompt is ${prevAnswer}</h3>
            <label for="prompt">Enter a prompt:</label>
            <input type="text" id="prompt">
            <button onclick="jumblePrompt()">Whisper</button>
        </div>`
            
        }
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
            <button onclick="window.location.reload();">Finish</button>
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

async function chatGptSpeaker(name) {
    return "Hello";
    /*
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": "Reverse Autocorrect this text in a funny way-  "+ name}]
            })
        });

        if (response.status === 429 && retryCount < maxRetries) {
            retryCount++;
            // Retry after a delay (e.g., 1 second)
            return setTimeout(() => chatGptSpeaker(name), 1000);
        } else {
            const data = await response.json();
            if (data) {
                const text = data.choices[0].message.content;
                // Now you can use the 'text' variable or return it
                console.log(text);
                return text;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
    */
}

// Example usage:


function finishGame() {
alert('Game finished! Check the guesses on the page.');
// Additional logic for finishing the game goes here.
}
/*
})
    
    .then(response => {
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
            return Promise.resolve(text);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

function finishGame() {
    alert('Game finished! Check the guesses on the page.');
    // Additional logic for finishing the game goes here.
}
*/