import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username) onLogin(username);
    };

    return (
        <div className="login">
            <input 
                type="text" 
                placeholder="Enter your username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;