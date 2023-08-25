import React, { useState } from 'react';
import { FiCode, FiX, FiMenu } from "react-icons/fi";
import './Header.css';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="Header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">GetSpaceOne <FiCode/></a>
                    </div>
                    <ul className={`menu ${click ? 'active' : ''}`}>
                        <li className="menu-link">
                            <a href="#">ABOUT</a>
                        </li>
                        <li className="menu-link">
                            <a href="#">CONTACT</a>
                        </li>
                        <li className="menu-link">
                            <a href="#">BLOG</a>
                        </li>
                    </ul>
                    <div className={`mobile-menu ${click ? 'active' : ''}`} onClick={handleClick}>
                        {click ? <FiX/> : <FiMenu/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
