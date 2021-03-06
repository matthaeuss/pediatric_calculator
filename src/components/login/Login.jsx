import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function validate() {
    if (email === "") {
      emailRef.current.classList.add("validation-error");
    } else {
      emailRef.current.classList.remove("validation-error");
    }
    if (password === "") {
      passwordRef.current.classList.add("validation-error");
    } else {
      passwordRef.current.classList.remove("validation-error");
    }
  }

  return (
    <div className="login-box">
      <h1>Zaloguj się</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
      />
      <p>
        Nie masz konta? <Link to="/register">Zarejestruj się</Link>
      </p>
      <button onClick={validate}>Zaloguj się</button>
      <p>
        <Link to="/">Kontynuuj bez rejestracji</Link>
      </p>
    </div>
  );
}

export default Login;