import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function ChatHeader({ user }) {
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload(); 
    };

    return (
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
                    Welcome
                </Typography>
                {user && (
                    <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{
                            textTransform: "none",
                            fontSize: "14px",
                        }}
                    >
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default ChatHeader;
