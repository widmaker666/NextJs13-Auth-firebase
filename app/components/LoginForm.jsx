"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

async function loginUser(data) {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(URL, options);
  return response;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage("Please enter all fields.");
      setHasError(true);
      return;
    }
    setHasError(false);

    const response = await loginUser({ email, password, task: "login" });
    const responseJson = await response.json();

    if (responseJson.status === 200) {
      setEmail("");
      setPassword("");
      setMessage(responseJson.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setHasError(true);
      setMessage(responseJson.message);
    }
  }

  function toggleShow() {
    setShowPassword((current) => !current);
  }

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <div className="pass-eye">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />{" "}
            {showPassword && <FaEyeSlash onClick={toggleShow} />}
            {!showPassword && <FaEye onClick={toggleShow} />}
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
      No account yet ? <Link href="/register">Got to register</Link>
      {message && <div className={hasError ? 'error' : 'ok'}>{message}</div> }
    </>
  );
}
