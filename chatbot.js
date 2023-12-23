// Created by Vince
document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.getElementById("send-btn");
    const chatbox = document.querySelector(".chatbox");

    let userMessage;
    const API_KEY = "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";

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
    };
    const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        })
    };

    // Send post request to API, get response
    fetch(API_URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data); // Log the data received from OpenAI API
            messageElement.textContent = data.choices[0].message.content;
        })
        .catch((error) => {
            console.error(error);
            messageElement.textContent = "Oops! Something went wrong. Liwata nlng ky bobo ka.";
        });
};

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatInput.value = ""; // Clear the input after sending
        //scroll to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
        
        setTimeout(() => {
            // Display thinking
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            
            // Simulate a response after 1 second (replace this with your actual API call)
            setTimeout(() => {
                generateResponse(incomingChatLi);
                
                
                if (userMessage.toLowerCase().includes("your name")) {
                    // Add a custom response
                    setTimeout(function() {
                    const specialResponse = "Joke lang! HAHAHAHAHA \n \n I'm PV Bot! Your personal chatbot. How can I help you?";
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                        showMessage(specialResponse, "incoming");
                    }, 3000);
                } else if (
                userMessage.toLowerCase().includes("hi") ||
                userMessage.toLowerCase().includes("hey") ||
                userMessage.toLowerCase().includes("hello")
                ) {
                    // Add a custom response
                    setTimeout(function() {
                    const specialResponse = "Btw I have a list of my features that you will enjoy!\n\nTry this Features!\n\n✓AI generated\n✓Can open a new tab for Facebook, Google, YouTube.\n\n●⁠Say Open (youtube, fb/facebook, google) to activate.\n\n✓Can play directly on YouTube, anything you ask. \n\n●⁠to activate just Say Open/Watch/Play (title of the video/music)\nexample!\n\n//(Watch/Play) Memes on youtube. \n\n✓Can go directly to the website that you've entered.\n\n●⁠just say Open/Search (website) \n\nexample!\n\n//Search y8.com \nor\n//Open y8.com";
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                        showMessage(specialResponse, "incoming");
                    }, 30000);
                }
                
                else if (
                userMessage.toLowerCase().includes("what are you") ||
                userMessage.toLowerCase().includes("your feature") ||
                userMessage.toLowerCase().includes("your features")
                ) {
                    // Add a custom response
                    setTimeout(function() {
                    const specialResponse = "And also, I have a few features that Papa Vince created to add entertainment for you!\n\n\nTry this features!\n\n✓Say Open (facebook/google) = open a new tab for Facebook/Google.\n\n✓Say Open/Play/Watch (youtube) = open a new tab for Youtube.\n\n\nTry to direct search!\n\n✓Play/Watch (videos you like to search) on Youtube = directly go to Youtube and search your video.\n\nexample!\n\nWatch Memes on youtube.\n\n\n✓Say Open/Search (example y8.com) = directly go to the website that you've entered.\n\nexample!\n\n  Search y8.com \n\nor\n\nOpen y8.com\n\n\nThat's the features that Papa Vince created!\nMaybe soon it's my time to upgrade again!";
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                        showMessage(specialResponse, "incoming");
                    }, 5000);
                } else if (userMessage.toLowerCase().includes("your founder") || userMessage.toLowerCase().includes("your creator") || userMessage.toLowerCase().includes("created") && userMessage.toLowerCase().includes("you") || userMessage.toLowerCase().includes("your father")) {
                    // Add a custom response
                    setTimeout(function() {
                    const specialResponse = "HAHAHAHAHA... Pati ka man? \n \n Si papa Vince!";
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                        showMessage(specialResponse, "incoming");
                    }, 3000);
                } else if (
                //direct search on youtube
                userMessage.toLowerCase().includes("watch") &&
                userMessage.toLowerCase().includes("youtube") || 
                userMessage.toLowerCase().includes("play") && 
                userMessage.toLowerCase().includes("youtube")
                ) {
                    const specialResponse = "Cge! \n\n Redirecting you to YouTube to watch a video.";
                     const searchTerm = userMessage.toLowerCase().replace("play", "").replace("please", "").replace("watch", "").replace("on youtube", "").replace("youtube", "").replace("let's", "").trim();
                    // Open YouTube in a new tab
                    window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(searchTerm), "_blank");
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                    // Call showMessage function if needed
                } else if (
                userMessage.toLowerCase().includes("watch") && 
                userMessage.toLowerCase().includes("video") &&
                userMessage.toLowerCase().includes("youtube") || 
                userMessage.toLowerCase().includes("open") && 
                userMessage.toLowerCase().includes("youtube")
                ) {
                    const specialResponse = "Kalma! Nd kagid majokan. \n\n Ari na! Redirecting you to YouTube to watch a video.";
                    // Open YouTube in a new tab
                    window.open("https://www.youtube.com/", "_blank");
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                    // Call showMessage function if needed
                } else if(userMessage.toLowerCase().includes("hahaha") || userMessage.toLowerCase().includes("hahahahahahahah") || userMessage.toLowerCase().includes("haha") || userMessage.toLowerCase().includes("hahahaha")){
                    setTimeout(function() {
                    const specialResponse = "Pati ka ah! \n\nHAHAHAHAHA, I don't know what's funny but I don't care!!!";
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                        showMessage(specialResponse, "incoming");
                     }, 3000);
                } else if (
                userMessage.toLowerCase().includes("open") &&
                userMessage.toLowerCase().includes("google")
                ) {
                    const specialResponse = "May trust issue ka guro ay! \n\n Oh! Redirecting you to Google daw into ka daan.";
                    // Open google in a new tab
                    window.open("https://www.google.com/", "_blank");
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                } else if (
                userMessage.toLowerCase().includes("open") &&
                (userMessage.toLowerCase().includes("facebook") || userMessage.toLowerCase().includes("fb"))
                ) {
                    const specialResponse = "Joke lang! \n\n Basta ikaw e open ko ang facebook para simo.";
                    // Open fb in a new tab
                    window.open("https://www.facebook.com/", "_blank");
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                    showMessage(specialResponse, "incoming");
                } //else if (userMessage.toLowerCase().includes("search") && userMessage.toLowerCase().includes("google") || userMessage.toLowerCase().includes("search")) {
                    //const search = userMessage.replace("please", "").replace("search", "").replace("please search", "").replace("on google", "").replace("google", "").trim();
                    //const specialResponse = "Para matagaan kagd space!\n\nRedirecting you to Google.";
                   // chatbox.appendChild(createChatLi(specialResponse, "incoming"));
               //     showMessage(specialResponse, "incoming");
                    // Open Google in a new tab or window
            //        window.open("https://www.google.com/search?q=" + encodeURIComponent(search), "_blank");
          //      }
                //direct search websites
                else if (
                //
                (userMessage.toLowerCase().includes("open") &&
                userMessage.toLowerCase().includes(".com")) || 
                (userMessage.toLowerCase().includes("search") && 
                userMessage.toLowerCase().includes(".com")) ||
                (userMessage.toLowerCase().includes("open") &&
                userMessage.toLowerCase().includes("https:")) || 
                (userMessage.toLowerCase().includes("search") && 
                userMessage.toLowerCase().includes("https:"))
                ) {
                    const specialResponse = "Danay lang! \n\n pagustuha da ang ginhawa mo! Redirecting you to that website.";
                     const linkSearch = userMessage.toLowerCase().replace("open", "").replace("please", "").replace("search", "").replace("on google", "").trim();
                    // Open websites a new tab
                    window.open("https://www."+encodeURIComponent(linkSearch)+"/", "_blank");
                    chatbox.appendChild(createChatLi(specialResponse, "incoming"));
                    // Call showMessage function if needed
                }
                
                else {
                    // Use the GPT API for other messages
                    generateResponse(incomingChatLi);
                }
                
                //scroll to bottom
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 700);
        }, 600);
    };

    sendChatBtn.addEventListener("click", handleChat);
});
