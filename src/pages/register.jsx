import React from "react";
import { useState } from "react";
import { firestorefs } from "../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import "../css/home.css";
function Register() {
  const [message, setMessage] = useState("");
  const [sent, issent] = useState(false);
  const onSubmitHandele = async (e) => {
    e.preventDefault();
    try {
      addDoc(collection(firestorefs, "messages"), {
        text: message,
        createdAt: new Date(),
      });
      setMessage("");
      issent(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      <form onSubmit={onSubmitHandele}>
        <input
          className="message-input"
          type="text"
          placeholder="enter a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
        {sent ? (
          <p style={{ color: "green" }}>sent</p>
        ) : (
          <p style={{ color: "red" }}>not sent</p>
        )}
      </form>
    </div>
  );
}

export default Register;
