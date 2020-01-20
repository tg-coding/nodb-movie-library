import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDropdown: false
        }
    }

    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }
    
    
    render(){        
        return (
            <header>
                <div className="header-contents">
                    <img src={logo} id="logo" alt=""/>
                    {/* <input id="search" placeholder="search" /> */}
                    <nav id="desktop-nav">
                        <a className="nav-links">Home</a>
                        <a className="nav-links">Movies</a>
                        <a className="nav-links">TV Shows</a>
                        <a className="nav-links">Recently Added</a>
                        <a className="nav-links">Logout</a>
                    </nav>


                    <button id="mobile-nav" onClick={this.toggleDropdown}>MENU&ensp;&#9776;</button>
                    
                    {this.state.showDropdown
                    ?  (<nav class='dropdown-container'>
                            <div id="dropdown-nav">
                                <a className="nav-links">Home</a>
                                <a className="nav-links">Movies</a>
                                <a className="nav-links">TV Shows</a>
                                <a className="nav-links">Recently Added</a>
                                <a className="nav-links">Logout</a>
                            </div>
                        </nav>)
                    : null}
                </div>
            </header>
        );
    }
}

export default Header