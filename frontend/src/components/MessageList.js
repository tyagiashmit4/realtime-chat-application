import React from "react";

function MessageList({ messages, user }) {
  return (
    <div style={{ flexGrow: 1, overflowY: "auto", padding: "10px" }}>
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            textAlign: message.user === user ? "right" : "left",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px",
              borderRadius: "10px",
              backgroundColor: message.user === user ? "#3f51b5" : "#ccc",
              color: message.user === user ? "#fff" : "#000",
            }}
          >
            <strong>{message.user}:</strong> {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
