import React from 'react'
import "./Project.css"

const Project = (props) => {
    return (
        <div className="project">
            <div className="project_img_container">
                <img className="project_img" src={props.imageurl}/>
            </div>
            <div className="project_desc_container">
                <h2 className="project_title">{props.title}</h2>
                <p className="project_date">{props.date}</p>
                <p className="project_description"><i>{props.description}</i></p>
                <div className="project_tech">
                    <ul>
                        {
                            props.techstack.map((elem,index)=>{
                                return <li key={index}>{elem}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
);
}
export default Project;