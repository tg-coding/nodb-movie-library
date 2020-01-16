import React from 'React'

function Header (){
    return(
        <header>
            <div className="header-contents">
                <img id="logo" src="" />
                <input placeholder="search" />
                <nav>
                    <a>Home</a>
                    <a>Movies</a>
                    <a>Sign In</a>
                </nav>
            </div>
        </header>
    )
}

export default Header