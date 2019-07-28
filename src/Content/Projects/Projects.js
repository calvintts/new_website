import React from 'react'
import Project from './Project/Project'
import './Projects.css'
import {Element} from 'react-scroll';
import calculator_img from "../../asset/calculator.png";
import tictactoe_img from "../../asset/tictactoe.png";
import movemi_img from "../../asset/movemi.jpg";

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
                imageurl={tictactoe_img}
                title="Tic Tac Toe"
                date="2019"
                description="My first android application. This project was created to get familiar with Android Studio SDK and how the Constraint Layout works."
                techstack={["Android Studio SDK","Java"]}/>
            <Project
                imageurl={movemi_img}
                title="MoveMi"
                date="2017"
                description="This project was created in Hackathon 2017 with 3 other group mates. It was awarded the best application of the Hackathon and best application in health and wellness. It has to be used with Leap Motion Censor, a hand gesture tracking device."
                techstack={["C#","Unity 3D","Leap Motion SDK", "Electron"]}/>
        </section>
    );
}
    export default Projects;