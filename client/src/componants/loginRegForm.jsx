import React, { useState } from 'react';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    // Implement login logic here
    console.log('Login clicked');
};

return (
    <div>
    <h2>Login</h2>
    <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>


    <h2>Register</h2>
    <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <button onClick={handleRegister}>Register</button>
    </div>
);
};

export default Login;
