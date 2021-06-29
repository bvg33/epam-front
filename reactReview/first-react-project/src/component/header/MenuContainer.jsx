import {connect} from "react-redux";
import {setFiles} from "../../redux/creator/FileStateActionCreator";
import Menu from "./Menu";

let mapStateToProps = (state) => {
    return {
        url: state.fileParams.url,
        token: state.loginPage.token
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setFilesParams: (fileList, pathsToImg, url) => {
            const action = setFiles(fileList, pathsToImg, url);
            dispatch(action);
        }
    }
}
export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);