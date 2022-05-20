import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-box">
            <h1>Zaloguj się</h1>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>
                Nie masz konta? <Link to="/">Zarejestruj się</Link>
            </p>
            <button>Zaloguj się</button>
            <p>
                <Link to="/">Kontynuuj bez rejestracji</Link>
            </p>
        </div>
    );
}

export default Login;