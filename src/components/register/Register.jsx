import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

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
    if (name === "") {
      nameRef.current.classList.add("validation-error");
    } else {
      nameRef.current.classList.remove("validation-error");
    }
  }

  return (
    <div className="register-box">
      <h1>Zarejestruj się</h1>
      <input
        type="text"
        placeholder="Imię"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
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
        Masz już konto? <Link to="/login">Zaloguj się</Link>
      </p>
      <button onClick={validate}>Zarejestruj się</button>
      <p>
        <Link to="/">Kontynuuj bez rejestracji</Link>
      </p>
    </div>
  );
}

export default Register;