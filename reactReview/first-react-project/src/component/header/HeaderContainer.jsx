import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        token: state.loginPage.token
    }
}
export const HeaderContainer = connect(mapStateToProps, null)(Header);