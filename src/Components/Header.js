import React from 'react';
import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <div className="header-contents">
                <img src={logo} id="logo" alt=""/>
                {/* <input id="search" placeholder="search" /> */}
                <nav>
                    <a className="nav-links">Home</a>
                    <a className="nav-links">Movies</a>
                    <a className="nav-links">TV Shows</a>
                    <a className="nav-links">Recently Added</a>
                    <a className="nav-links">Logout</a>
                </nav>
            </div>
        </header>
    );
}

export default Header