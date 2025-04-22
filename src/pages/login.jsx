import React from "react";
import { useState } from "react";
 function Login(){
    const[mail,setmail]=useState("");
    const[password,setpassword]=useState("");

    const onSubmitHandele=(e)=>{
        e.preventDefault();
        console.log(mail,password);
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmitHandele}>
                <label htmlFor="mail">mail</label>
                <input style={styles.input} type="text" name="mail" id="mail" value={mail} onChange={(e)=>setmail(e.target.value)} />
                <label htmlFor="password">password</label>
                <input style={styles.input}type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button style={styles.buttonPrimary} type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;
const styles = {
    input: {
      width: "295px",
      height: "30px",
      borderRadius: "4px",

    },
    buttonPrimary: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }
  };
  