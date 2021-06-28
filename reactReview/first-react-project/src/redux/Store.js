import {combineReducers, createStore} from "redux";
import {loginReducer} from "./LoginReducer";
import {registerReducer} from "./RegisterReducer";
import {globalStateReducer} from "./GlobalStateReducer";
import {mainPageReducer} from "./MainPageReducer";


const reducers = combineReducers({
    loginPage: loginReducer,
    registerPage: registerReducer,
    globalStateParams: globalStateReducer,
    mainPage: mainPageReducer
})
const store = createStore(reducers);

export default store;