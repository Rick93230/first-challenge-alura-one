function encryptMessage(){
    let message = document.getElementById('textArea').value;
    if(message != ''){
        let finalMessage = encryptLetter(message)
        document.getElementById("divMessageContent").innerHTML = finalMessage;
        setFlagMessageCopy("divMessageContent", 1);
    }else{
        setFlagMessageCopy("divMessageContent", 0);
        setNotFoundMessage();
    }
}

function decryptMessage(){
    let message = document.getElementById('textArea').value;
    if(message != ''){
        let finalMessage = decryptLetter(message);
        document.getElementById("divMessageContent").innerHTML = finalMessage;
        setFlagMessageCopy("divMessageContent", 1);
    }else{
        setFlagMessageCopy("divMessageContent", 0);
        setNotFoundMessage();
    }
}

function encryptLetter(message){
    let sizeMessage = message.length;
    let finalMessage = message.split('');
    for(var i = 0; i < sizeMessage; i++){
        let character = message.charAt(i);
        switch(character){
            case 'a':
                finalMessage[i] = 'ai';
                break;
            case 'e':
                finalMessage[i] = 'enter';
                break;
            case 'i':
                finalMessage[i] = 'imes';
                break;
            case 'o':
                finalMessage[i] = 'ober';
                break;
            case 'u':
                finalMessage[i] = 'ufat';
                break;
            default:
                break;
        }
    }
    finalMessage = finalMessage.join('');
    return finalMessage;
}

function decryptLetter(message){
    let finalMessage = message.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    return finalMessage;
}

function copyMessage(){
    let messageCopy = document.getElementById("divMessageContent");
    let flagMessageCopy = messageCopy.getAttribute('data-flagMessageCopy');
    if(flagMessageCopy > 0){
        var divText = document.getElementById("divMessageContent");
        let elementText = divText.textContent;
        navigator.clipboard.writeText(elementText);
        alert("Mensaje copiado al portapaleles.");
    }
}

function setNotFoundMessage(){
    document.getElementById("divMessageContent").innerHTML = '<div class="img-find"><img src="./imgs/find.png"></div><span class="header-result-message-right">Ningún mensaje fue encontrado</span><span class="body-result-message-right">Ingresa el texto que desees encriptar o desencriptar.</span>';
}

function setFlagMessageCopy(div, flag){
    let messageCopy = document.getElementById(div);
    let flagMessageCopy = messageCopy.setAttribute('data-flagMessageCopy', flag);
}