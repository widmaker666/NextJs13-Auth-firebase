"use client";

import { useState } from "react";

async function loginUser(data) {
  const URL = "http://localhost:3000/api/auth";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
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
  const [showPssword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage("Please enter all fields.");
      setHasError(true);
      return;
    }
    setHasError(false);
    const response = await loginUser(email, password, "login");
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


    </>
)

}
