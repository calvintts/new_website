import React from 'react';
import {Link} from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
    return(
        <header>
            <nav>
                <a id="profile-link" href="#about"><img alt="profile" id="profile-pic" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c10.0.40.40a/p40x40/40898157_1842919779137138_2782651672617287680_n.jpg?_nc_cat=110&_nc_oc=AQnOi5aqUzkx9tzh21bzx0hof5MqjWSAYyrTkRL5-7aWHE30LnRMnYt7i0nR21L8pGg&_nc_ht=scontent-sjc3-1.xx&oh=73e87aae55f139edca987b530bcd691c&oe=5D8BCAA4"/><span id="profile-name">Calvin</span></a>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={300} >About</Link>
                    </li>
                    <li className="nav-li">
                        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={300} >Projects</Link>
                    </li>
                    <li className="nav-li">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={300} >Contact</Link>
                    </li>
                </ul>
            </nav>
</header>
    )
}



export default Navbar;