import React from 'react'
import Project from './Project/Project'
import './Projects.css'
import calculator_img from "../../asset/calculator.png";
const Projects = (props) => {
    return (
        <section className="projects_section">
            <Project
                imageurl={calculator_img}
                title="calculator"
                date="Summer 2018"
                description="Something I created for fun"
                techstack={["React.js","JavaScript","ES6","HTML","CSS"]}/>
        </section>
    );
}
    export default Projects;