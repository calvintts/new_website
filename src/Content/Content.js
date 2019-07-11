import React from 'react';
import Banner from './Banner/Banner'
import FakeDiv from '../HOC/FakeDiv'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

const Content = (props) => {
    return (
        <FakeDiv>
            <Banner/>
            <Projects/>
            <Footer/>
        </FakeDiv>
    )
}

export default Content