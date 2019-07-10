import React,{Component} from 'react';
import Navbar from './Header/Navbar';
import Content from './Content/Content';
import FakeDiv from './HOC/FakeDiv';

class App extends Component{
    render(){
        return (
            <FakeDiv>
                <Navbar/>
                <Content/>
            </FakeDiv>
            )
    }
}

export default App