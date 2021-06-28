import React, {Component} from "react";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./component/mainPage/MainPage";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Header globalState={this.props.store}/>
                <Route exact path='/login' render={() => <Login loginPageState={this.props.store}/>}/>
                <Route exact path='/register' render={() => <Register registerPageState={this.props.store}/>}/>
                <Route exact path='/main' render={() => <MainPage globalState={this.props.store}/>}/>
            </BrowserRouter>
        );
    }
}

export default App;
