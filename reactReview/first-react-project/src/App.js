import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginContainer} from "./component/login/LoginContainer";
import {RegisterContainer} from "./component/register/RegisterContainer";
import {MainPageContainer} from "./component/mainPage/MainPageContainer";
import {HeaderContainer} from "./component/header/HeaderContainer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderContainer/>
                <Route exact path='/login' render={() => <LoginContainer/>}/>
                <Route exact path='/register' render={() => <RegisterContainer/>}/>
                <Route exact path='/main' render={() => <MainPageContainer/>}/>
            </BrowserRouter>
        );
    }
}

export default App;
