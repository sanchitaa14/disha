import React, { useEffect } from 'react';

const BotpressWebChat = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');

    // Set the script source to the Botpress webchat inject.js
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize the Botpress webchat after the script is loaded
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "29a90978-3f6d-47d7-addf-1035088035f9",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "29a90978-3f6d-47d7-addf-1035088035f9",
        "webhookId": "140008d1-8ec8-4d4a-bff8-67469d3b399b",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      });
    };

    // Cleanup: Remove the script element when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
};

export default BotpressWebChat;
