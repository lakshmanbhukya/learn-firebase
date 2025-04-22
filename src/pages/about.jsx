import React from "react";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic.</p>
            <a  style={styles.link}href="http://github.com/lakshmanbhukya" target="_blank" rel="noopener noreferrer">Github</a>
            <a  style={styles.link}href="https://linkedin.com/in/lakshmanbhukya" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
    );
}
const styles = {
    link:{
       color:"blue",
       textDecoration:"none",
       margin:"1rem"
    }
}