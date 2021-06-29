import {connect} from "react-redux";
import MainPage from "./MainPage";
import {setFiles} from "../../redux/creator/FileStateActionCreator";

let mapStateToProps = (state) => {
    return {
        fileList: state.fileParams.fileList,
        pathsToImg: state.fileParams.pathsToImg,
        url: state.fileParams.url
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setFilesParams: (fileList,pathsToImg,url) => {
            const action = setFiles(fileList,pathsToImg,url);
            dispatch(action);
        }
    }
}
export const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);