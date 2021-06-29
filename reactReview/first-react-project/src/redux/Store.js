import {combineReducers, createStore} from "redux";
import {loginReducer} from "./LoginReducer";
import {registerReducer} from "./RegisterReducer";
import {fileStateReducer} from "./FileStateReducer";


const reducers = combineReducers({
    loginPage: loginReducer,
    registerPage: registerReducer,
    fileParams: fileStateReducer,
})
const store = createStore(reducers);

export default store;