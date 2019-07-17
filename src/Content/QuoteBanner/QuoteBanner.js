import React from 'react'
import "./QuoteBanner.css";

const QuoteBanner = (props) => {
    return (
        <div className="quote-banner">
            <div className="quotebanner-left">
                <h3>"Hard work beats talent when talent fails to work hard."</h3>
                <p>-Kevin Durant</p>
            </div>
            <div className="quotebanner-right">
                <img className="quote-img" alt="quote-banner" src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-7930f.appspot.com/o/computer.jpg?alt=media&token=cb480195-fb7c-4b88-ba52-4e750d5319ca"/>
            </div>
        </div>
    )
}

export default QuoteBanner;
