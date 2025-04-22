import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>learn-firebase</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        {/* <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li> */}
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
