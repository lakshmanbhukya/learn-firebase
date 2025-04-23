import React from "react";
import { useState } from "react";
import { firestorefs, auth, provider } from "../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import googleimg from "../images/google-48.png";
function Register() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestorefs, "users"), {
        mail: mail,
        password: password,
        createdAt: new Date(),
      });
      alert("user add Succesfully");
      setmail("");
      setpassword("");
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      await addDoc(collection(firestorefs, "users"), {
        mail: user.email,
        password: user.uid,
        createdAt: new Date(),
        method: "google",
      });

      alert("sign in succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={onSubmitHandle}>
        <label htmlFor="mail">mail</label>
        <input
          type="text"
          name="mail"
          id="mail"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
          style={styles.input}
          autoComplete="off"
        /><br/>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          style={styles.input}
          autoComplete="off"
        /><br/>
        <button type="submit" style={styles.buttonPrimary}>Register</button>
      </form>
      <div style={styles.orDivider}>OR</div>

      <button onClick={handleGoogleSignin} style={styles.googleButton}>
        <img src={googleimg} alt="Google" style={styles.googleIcon} />
        <span style={{ fontSize: "14px", color: "black" }}>
          Sign in with Google
        </span>
      </button>
    </>
  );
}

export default Register;

const styles = {
  input: {
    width: "295px",
    height: "30px",
    borderRadius: "4px",
    marginBottom: "10px",
    padding: "0 10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginLeft:"10px"
  },
  buttonPrimary: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  orDivider: {
    margin: "20px auto",
    color: "#888",
    fontSize: "14px",
    fontWeight: "bold",
  },
  googleButton: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "black",
    fontSize: "14px",
    transition: "background-color 0.3s ease-in-out",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
  },
};

