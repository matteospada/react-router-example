import React from 'react'
import { Link } from "react-router-dom";


export function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to='/'>Home</Link><br></br>
        <Link to='/About'>About</Link>
      </div>
    );
  }