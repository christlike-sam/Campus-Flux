import { useState, useRef } from 'react';
import "../css/Header.css"
export default function Navbar(){

  return (
    <nav>
      <div className='nav'>
      <ul className='items'>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
</ul>
      </div>
    </nav>
  );
};
