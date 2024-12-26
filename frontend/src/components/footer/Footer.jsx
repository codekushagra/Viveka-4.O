import React from 'react'
import './footer.css';
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Tech Fusion Club. All rights reserved. 
                <br /> 
                <h5>Developed by <a href='https://www.instagram.com/__kushagra__24/'>Kushagra Chaturvedi</a></h5>
            </p>
            <div className="social-links">
                <a href="https://github.com/codekushagra" target='blank'><AiFillGithub /></a>
                <a href="https://www.instagram.com/__kushagra__24/" target='blank' ><AiFillInstagram /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer