import React, { Component } from "react";
import "./Banner.css"
import Img from '../../asset/banner_image.png';
class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img id="banner_img" src={Img}/>
                <h1>Calvin's Portfolio</h1>
                <p>Explore my work</p>
            </div>
        )
    }
}
export default Banner