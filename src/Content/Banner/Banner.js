import React, { Component } from "react";
import "./Banner.css"
import {Element} from "react-scroll/modules";
class Banner extends Component {
    render() {
        return (
            <Element name="about" className="banner">
                <img alt="banner" id="banner_img" src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-7930f.appspot.com/o/banner_image.png?alt=media&token=26fbafee-d153-4c10-83c7-4a1e8daef8ef"/>
                <h1 className="banner_title">Calvin's Portfolio</h1>
                <p className="banner_subtitle">Welcome to my website</p>
            </Element>
        )
    }
}
export default Banner