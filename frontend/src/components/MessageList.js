import React from "react";
import { Box, Typography } from "@mui/material";

function MessageList({ messages, user }) {
    return (
        <Box
            sx={{
                flex: 1,
                overflowY: "auto",
                padding: "10px",
                backgroundColor: "#e7eaf3",
            }}
        >
            {messages.map((msg, idx) => (
                <Box
                    key={idx}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: msg.user === user ? "flex-end" : "flex-start",
                        marginBottom: "10px",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            backgroundColor: msg.user === user ? "#6a5acd" : "#fff",
                            color: msg.user === user ? "#fff" : "#000",
                            padding: "8px 12px",
                            borderRadius: "10px",
                            boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                            maxWidth: "70%",
                            wordWrap: "break-word",
                        }}
                    >
                        <strong>{msg.user}</strong>: {msg.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

export default MessageList;
