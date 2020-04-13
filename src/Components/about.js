import React from 'react'
import { Link } from "react-router-dom";


export function About() {
    return (
      <div>
        <h2>About</h2>
        <Link to='/'>Home</Link><br></br>
        <Link to='/Dashboard'>Dashboard</Link>
      </div>
    );
  }