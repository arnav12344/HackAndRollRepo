var text = ""
const token = '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'
function chatGptSpeaker(){
    fetch('https://api.openai.com/v1/chat/completions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role":"user","content":"Hello!"}]
        })
    }).then( response => {
        return response.json();
    }).then(data => {
        text = data.choices[0].message.content;
    })
    console.log(text);
    return text;

}

