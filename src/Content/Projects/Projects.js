import React from 'react'
import Project from './Project/Project'
import './Projects.css'
import {Element} from 'react-scroll';
import calculator_img from "../../asset/calculator.png";
const Projects = (props) => {
    return (
        <section className="projects_section">
            <Element name="projects">
            <h2 id="projects" className="container_title">Projects</h2>
            </Element>
            <Project
                imageurl={calculator_img}
                title="Calculator"
                date="2019"
                description="This project was created to try out ReactJS. I learnt how ReactJS works compared to JQuery and how to create reusable component with ReactJS"
                techstack={["React.js","JavaScript","ES6","HTML","CSS"]}/>
            <Project
                imageurl={calculator_img}
                title="Calculator"
                date="2019"
                description="This project was created to try out ReactJS. I learnt how ReactJS works compared to JQuery and how to create reusable component with ReactJS"
                techstack={["React.js","JavaScript","ES6","HTML","CSS"]}/>
            <Project
                imageurl={calculator_img}
                title="Calculator"
                date="2019"
                description="This project was created to try out ReactJS. I learnt how ReactJS works compared to JQuery and how to create reusable component with ReactJS"
                techstack={["React.js","JavaScript","ES6","HTML","CSS"]}/>
        </section>
    );
}
    export default Projects;