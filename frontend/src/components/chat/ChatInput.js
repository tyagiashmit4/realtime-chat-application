import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ChatInput({ newMessage, setNewMessage, sendMessage }) {
    return (
        <Box
            sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#fff",
                borderTop: "1px solid #ddd",
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message here..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                sx={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: "5px",
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                }}
            />
            <IconButton
                color="primary"
                onClick={sendMessage}
                sx={{ marginLeft: "10px" }}
            >
                <SendIcon />
            </IconButton>
        </Box>
    );
}

export default ChatInput;
