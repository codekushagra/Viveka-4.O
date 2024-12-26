import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = ({isAuth}) => {
  return (
    <header>
        <a href='/'><div className='logo'> Tech Fusion Club</div></a>  

        <div className="link">
            <Link to={'/'}>Home</Link>
            <Link to={'/courses'}>Events</Link>
            <Link to={'/about'}>About</Link>
            {isAuth ? (
              <Link to={'/account'}>Account</Link> 
            ) : (
              <Link to={"/login"}>Login</Link>

            )}

        </div>
    </header>
  )
}

export default Header