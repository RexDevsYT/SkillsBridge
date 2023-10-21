async function fetchResponseFromAPI(text) {
    try {
        let response = await fetch('https://m9hhnbk6-5000.use2.devtunnels.ms/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user_input': text
            })
        });

        if (!response.ok) {
            console.error("Error fetc ng from API:", response.statusText);
            return "Sorry, I couldn't connect to the server.";
        }

        let data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error in fetchResponseFromAPI:", error);
        return "Sorry, something went wrong.";
    }
}

    function submitMessage() {
        var text = document.getElementById("chat-message-value").value;
        if (text == "") {
            return;
        }
        document.getElementById("chat-message-value").value = "";
      
        var newDiv = document.createElement("div");
        newDiv.className = "chat-bubble";
        var newImg = document.createElement("img");
        newImg.className = "user image";
        var newP = document.createElement("p");
        newP.innerHTML = text;
        newDiv.appendChild(newImg);
        newDiv.appendChild(newP);
      
        var messages = document.getElementById("chat-contents");
        messages.appendChild(newDiv);
        document.getElementById("submit-chat").classList.remove("active");
    
        fetchResponseFromAPI(text).then(botResponse => {
            var newDiv = document.createElement("div");
            newDiv.className = "chat-bubble";
            var newImg = document.createElement("img");
            newImg.className = "bot image";
            var newP = document.createElement("p");
            newP.innerHTML = botResponse;
            newDiv.appendChild(newImg);
            newDiv.appendChild(newP);
            messages.appendChild(newDiv);

            scrollToBottom();
        });
    }
    
    function arrowSubmit() {
        let button = document.getElementById("submit-chat");
        let text = document.getElementById("chat-message-value");
        if (text.value != "") {
            button.classList = "active";
        } else {
            button.classList.remove("active");
        }
    }
    
    function addHandlers() {
        document.getElementById("submit-chat").addEventListener("click", submitMessage);
        document.onkeypress = function (e) {
            if (e.keyCode == 13) {
                document.getElementById("submit-chat").click();
            }
        };
        document.getElementById("chat-message-value").addEventListener("input", arrowSubmit);

    // Añadir el evento de clic al botón de chat desplegable
    document.getElementById("toggle-chat-btn").addEventListener("click", toggleChatVisibility);


    document.querySelector(".close-chat-btn").addEventListener("click", closeChat);

    function closeChat() {
        const chatContainer = document.querySelector(".chat-container");
        const toggleButton = document.getElementById("toggle-chat-btn");


        
        chatContainer.classList.remove("active");
        toggleButton.style.display = "block";
    }
    
    }
    
    window.addEventListener("load", addHandlers);
    function toggleChatVisibility() {
        console.log("Toggle function called");
        const chatContainer = document.querySelector(".chat-container");
        chatContainer.classList.toggle("active");
        
        if (chatContainer.classList.contains("active")) {
            scrollToBottom();
        }
    }
    
    function scrollToBottom() {
        const chatContents = document.getElementById("chat-contents");
        chatContents.scrollTop = chatContents.scrollHeight;
    }

    function toggleChatVisibility() {
        const chatContainer = document.querySelector(".chat-container");
    
        if (chatContainer.classList.contains("active")) {
            chatContainer.classList.remove("active");
        } else {
            chatContainer.classList.add("active");
            scrollToBottom();
        }
    }
    
    function toggleChatVisibility() {
        const chatContainer = document.querySelector(".chat-container");
        const chatToggleBtn = document.querySelector(".chat-toggle-button");

    
        if (chatContainer.classList.contains("active")) {
            chatContainer.classList.remove("active");
    
            setTimeout(() => {
                chatToggleBtn.style.display = 'block';
            }, 300); // Aquí puedes ajustar el tiempo de espera (300ms en este ejemplo) según lo que desees.
        } else {
            chatToggleBtn.style.display = 'none';
            chatContainer.classList.add("active");
            scrollToBottom();
        }
    }
    
    
    
    
    
    
    

    