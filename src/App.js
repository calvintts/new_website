import React,{Component} from 'react';
import Navbar from './Header/Navbar';
import Content from './Content/Content';
import Aux from './HOC/Aux';

class App extends Component{
    render(){
        return (
            <Aux>
                <Navbar/>
                <Content/>
            </Aux>
            )
    }
}

export default App