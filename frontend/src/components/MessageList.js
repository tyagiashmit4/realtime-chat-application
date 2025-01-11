import React from 'react';

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.map((msg, idx) => (
                <div key={idx} className="message">
                    <strong>{msg.user}: </strong>{msg.text}
                </div>
            ))}
        </div>
    );
}

export default MessageList;