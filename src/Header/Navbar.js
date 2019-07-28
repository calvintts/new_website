import React from 'react';
import {Link} from 'react-scroll';
import "./Navbar.css";

class Navbar extends React.Component{

    state = {
        showNav:false
    }

    toggleNavButton = () => {
        this.setState({showNav:!this.state.showNav});
    }

    render() {
        return (
            <header>
                <nav className="nav-bar">
                    <a id="profile-link" href="#about"><img alt="profile" id="profile-pic"
                                                            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-7930f.appspot.com/o/profile-pic.jpeg?alt=media&token=7907ea54-6920-4e49-9983-8dfa66a4072d"/><span
                        id="profile-name">Calvin tey</span></a>
                    <ul className={this.state.showNav?"mobile-nav-ul":"nav-ul"}>
                        <li className={this.state.showNav?"mobile-nav-li":"nav-li"}>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={300}>About</Link>
                        </li>
                        <li className={this.state.showNav?"mobile-nav-li":"nav-li"}>
                            <Link activeClass="active" to="projects" spy={true} smooth={true}
                                  duration={300}>Projects</Link>
                        </li>
                        <li className={this.state.showNav?"mobile-nav-li":"nav-li"}>
                            <Link activeClass="active" to="contact" spy={true} smooth={true}
                                  duration={300}>Contact</Link>
                        </li>
                    </ul>
                    <button onClick={this.toggleNavButton}className="nav-button">
                        <img alt="button" className="popup-button"
                             src={this.state.showNav?"https://firebasestorage.googleapis.com/v0/b/my-portfolio-7930f.appspot.com/o/white-x.png?alt=media&token=bb85b0f6-ab0b-48d5-a7e7-144cd7bb2d56":"https://firebasestorage.googleapis.com/v0/b/my-portfolio-7930f.appspot.com/o/nav-button.png?alt=media&token=7b27cf8f-ccc3-4115-9e0a-fd4ce588f6f1"}/>
                    </button>
                </nav>
            </header>
        )
    }
}



export default Navbar;