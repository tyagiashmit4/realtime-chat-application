import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import MessageList from './MessageList';

const socket = io('http://localhost:5000');

function Chat({ user }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('receiveMessage', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = { user, text: newMessage };
            socket.emit('sendMessage', message);
            setNewMessage('');
        }
    };

    return (
        <div className="chat">
            <MessageList messages={messages} />
            <input 
                type="text" 
                placeholder="Type a message..." 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
