import { useState, useRef } from 'react';
import "../css/Header.css"
export default function Navbar(){

  return (
    <nav>
      <div className='nav'>
      <ul>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
</ul>
      </div>
    </nav>
  );
};
