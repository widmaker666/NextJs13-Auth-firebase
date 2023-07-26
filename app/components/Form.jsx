"use client";

import { useState } from "react";

export default function Form({ formTitle }) {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const URL = "http://localhost:3000/api/ideas";
    const data = {
      title: ideaTitle,
      description: ideaDescription,
    };
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const respons = await fetch(URL, option);
    const result = await respons.json()
    console.log({ resultFromClient: result });
    return result;
  }

  return (
    <div className="form-container">
      <h3 className="form-header">{formTitle}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Idea title</label>
        <input
          type="text"
          id="title"
          value={ideaTitle}
          onInput={(e) => setIdeaTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          value={ideaDescription}
          onInput={(e) => setIdeaDescription(e.target.value)}
        ></textarea>
        <input type="submit" value="Create" className="btn" />
      </form>
    </div>
  );
}
