import React from 'react';
import './App.css';
import logo from '../assets/icons/favicon.png';
const Navbar = () => {

    return (
        <nav className="navbar bg-dark shadow">

            <h4><img src={logo} alt="logo" className="logo"></img>BlogCover</h4>
            <a href="https://keithrainz.me/blogcover/">
            <i className="devicon-github-plain mr-3"></i>
            </a>
        </nav>);



};

export default Navbar;