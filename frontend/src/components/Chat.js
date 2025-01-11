import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MessageList from "./MessageList";
import img1 from "../assets/back1.jpg";
import {
    Box,
    TextField,
    IconButton,
    Typography,
    AppBar,
    Toolbar,
    Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const socket = io("http://localhost:5000");

function Chat({ user }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        socket.on("receiveMessage", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = { user, text: newMessage };
            socket.emit("sendMessage", message);
            setNewMessage("");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", 
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "90vh",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
                    backdropFilter: "blur(10px)", // Blurred effect
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "#6a5acd",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            ChatMe
                        </Typography>
                    </Toolbar>
                </AppBar>

                <MessageList messages={messages} user={user} />

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
                        placeholder="Chat here..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        sx={{
                            backgroundColor: "#f9f9f9",
                            borderRadius: "5px",
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
            </Container>
        </Box>
    );
}

export default Chat;
