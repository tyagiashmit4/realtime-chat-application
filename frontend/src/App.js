import React, { useState } from 'react';
import Login from './components/login/LoginPage';
import Chat from './components/chat/Chat';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="app">
            {user ? <Chat user={user} /> : <Login onLogin={setUser} />}
        </div>
    );
}

export default App;