import React from 'react';
import Banner from './Banner/Banner'
import Aux from '../HOC/Aux'
import Projects from './Projects/Projects'

const Content = (props) => {
    return (
        <Aux>
            <Banner/>
            <Projects/>
        </Aux>
    )
}

export default Content