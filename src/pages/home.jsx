import React, { useState } from "react";

function Submit() {
  return (
    <>
      <button type="submit" style={styles.buttonPrimary}>
        Click ME
      </button>
    </>
  );
}
function LoginForm() {
  const [username, setname] = useState("");
  const [email, setemail] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(username, email);
  };
  return (
    <>
      <form onSubmit={onSubmitHandle}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Submit />
      </form>
    </>
  );
}
export default function Home() {
  return (
    <>
      <h1>Welcome to HomePage</h1>
      <LoginForm />
    </>
  );
}
const styles = {
  buttonPrimary: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
