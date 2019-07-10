import React from 'react';
import Banner from './Banner/Banner'
import FakeDiv from '../HOC/FakeDiv'
import Projects from './Projects/Projects'

const Content = (props) => {
    return (
        <FakeDiv>
            <Banner/>
            <Projects/>
        </FakeDiv>
    )
}

export default Content