import React, { useState, useEffect } from 'react';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const webSocket = new WebSocket('ws://localhost:8000/ws/chat/room_name/');
        webSocket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setMessages([...messages, data.message]);
        };
        webSocket.onclose = () => {
            console.log('WebSocket Disconnected');
            // Optionally try to reconnect here
        };

        setWs(webSocket);
        return () => webSocket.close();
    }, []);

    const sendMessage = (message) => {
        ws.send(JSON.stringify({ message }));
    };

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
            <button onClick={() => sendMessage('Hello!')}>Send Message</button>
        </div>
    );
}

export default ChatRoom;
