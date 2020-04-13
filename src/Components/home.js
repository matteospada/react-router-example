import React from 'react'
import { Link } from "react-router-dom";


export function Home() {
    return (
      <div>
        <h2>Home</h2>
        <Link to='/About'>About</Link><br></br>
        <Link to='/Dashboard'>Dashboard</Link>
      </div>
    );
  }