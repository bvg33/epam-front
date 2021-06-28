import React, {Component} from "react";
import FileItem, {needToSenRequest} from "./FileItem";
import style from './style/MainPageStyle.module.css'
import {sendRequest} from "../../redux/creator/MainPageActionCreator";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.createFileItem = this.createFileItem.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    render() {
        const fileItemArray = this.createFileItem();
        return (
            <div className={style.allFiles}>
                <div className={style.fileBlock}>
                    {fileItemArray}
                </div>
            </div>
        );
    }

    sendRequest(){
        const action = sendRequest(this.props.globalState.getState().globalStateParams.url,this.props.globalState.dispatch);
        this.props.globalState.dispatch(action);
    }


    componentDidMount() {
        this.sendRequest();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            this.sendRequest();
    }



    createFileItem = () => {
        const fileItemArray = [];
        for (let i = 0; i < this.props.globalState.getState().mainPage.fileList.length; i++) {
            let name = `Name : ${this.props.globalState.getState().mainPage.fileList[i].name}`;
            let size = `Size : ${this.props.globalState.getState().mainPage.fileList[i].size} MB`;
            let path = `Path : ${this.props.globalState.getState().mainPage.fileList[i].path}`;
            let pathToImg = this.props.globalState.getState().mainPage.pathsToImg[i];
            fileItemArray.push(<FileItem name={name} size={size} path={path} pathToImg={pathToImg} globalState = {this.props.globalState}/>);
        }
        return fileItemArray;
    }
}

export default MainPage;