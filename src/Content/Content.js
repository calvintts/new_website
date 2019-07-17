import React from 'react';
import Banner from './Banner/Banner'
import FakeDiv from '../HOC/FakeDiv'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'
import QuoteBanner from './QuoteBanner/QuoteBanner'
import ContactForm from "./ContactForm/ContactForm";

const Content = (props) => {
    return (
        <FakeDiv>
            <Banner/>
            <Projects/>
            <QuoteBanner/>
            <ContactForm/>
            <Footer/>
        </FakeDiv>
    )
}

export default Content