import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-contents">
                <img id="logo" src="" alt=""/>
                <input id="search" placeholder="search" />
                <nav>
                    <a>Home</a>
                    <a>Movies</a>
                    <a>Logout</a>
                </nav>
            </div>
        </header>
    );
}

export default Header