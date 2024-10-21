var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var cardsContainer = document.getElementById("cardsContainer");

setTimeout(function() {
    modal.style.display = "block";
}, 1000);

span.onclick = function() {
    modal.style.display = "none";
    cardsContainer.style.display = "flex"; 
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        cardsContainer.style.display = "flex"; 
     }
}


var chatbotButton = document.getElementById("chatbot-button");
var chatbotWindow = document.getElementById("chatbot-window");
var chatbotClose = document.getElementById("chatbot-close");
var chatbotBody = document.getElementById("chatbot-body");
var chatbotInput = document.getElementById("chatbot-input");

chatbotButton.onclick = function() {
    chatbotWindow.style.display = "flex";
}

chatbotClose.onclick = function() {
    chatbotWindow.style.display = "none";
}

chatbotInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var userMessage = chatbotInput.value;
        if (userMessage.trim() !== "") {
            appendMessage("Felhasználó", userMessage);
            chatbotInput.value = "";
            setTimeout(function() {
                botReply(userMessage);
            }, 1000); 
        }
    }
});


function appendMessage(sender, message) {
    var messageParagraph = document.createElement("p");
    messageParagraph.textContent = sender + ": " + message;
    chatbotBody.appendChild(messageParagraph);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; 
}

function botReply(userMessage) {
    var botMessage;
    if (userMessage.toLowerCase().includes("hello")) {
        botMessage = "Szia! Miben segíthetek?";
    } else if (userMessage.toLowerCase().includes("projekt")) {
        botMessage = "A projektek itt találhatók az oldalon!";
    } else {
        botMessage = "Nem értem pontosan. Kérlek próbálj meg máshogy kérdezni!";
    }
    appendMessage("Chatbot", botMessage);
}
