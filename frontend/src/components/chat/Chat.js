import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MessageList from "../../components/MessageList";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import img1 from "../../../src/assets/back1.jpg";
import { Box, Container } from "@mui/material";

const socket = io("http://localhost:5000");

function Chat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
       
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

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
            const userMessage = { user: user.username, text: newMessage };
            socket.emit("sendMessage", userMessage);
            setMessages((prev) => [...prev, userMessage]);

            setTimeout(() => {
                const botReply = {
                    user: "ChatBot",
                    text: `Hi ${user.username},"! How can I help you further?`,
                };
                setMessages((prev) => [...prev, botReply]);
            }, 1000);

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
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                }}
            >
                <ChatHeader user={user.username} />
                <MessageList messages={messages} user={user.username} />
                <ChatInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    sendMessage={sendMessage}
                />
            </Container>
        </Box>
    );
}

export default Chat;
