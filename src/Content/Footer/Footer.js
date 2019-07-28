import React from 'react'
import FakeDiv from '../../HOC/FakeDiv'
import LinkedinPic from '../../asset/linkedin.png'
import EmailPic from '../../asset/email.png'
import GithubPic from '../../asset/github.png'
import FacebookPic from '../../asset/fb.png'
import "./Footer.css"

const links = [
    {
        "name":"Linkedin",
        "url":"https://www.linkedin.com/in/calvintey",
        "icon":LinkedinPic,
    },
    {
        "name":"Github",
        "url":"https://github.com/calvintts",
        "icon":GithubPic,
    },
    {
        "name":"Facebook",
        "url":"https://www.facebook.com/calvin.tey95",
        "icon":FacebookPic,
    },
    {
        "name":"Email",
        "url":"mailto:calvintts95@gmail.com",
        "icon":EmailPic,
    },
]


const Footer = () => {
    return (
        <FakeDiv>
            <h3 className="footer-title">Make a friend?</h3>
            <footer>
                <ul className="social-list">
                    {links.map((elem,index)=>{
                        return (
                            <li key={index} className="social-div">
                                <a href={elem.url}><img alt={`elem ${elem.name}`} className="footer-icon" src={elem.icon}/></a>
                                <p>{elem.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </footer>
        </FakeDiv>
    )
}

export default Footer;