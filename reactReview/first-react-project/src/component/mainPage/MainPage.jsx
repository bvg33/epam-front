import React, {Component} from "react";
import FileItem from "./FileItem";
import style from './style/MainPageStyle.module.css'
import {sendFileRequest} from "../../service/FileService";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.createFileItem = this.createFileItem.bind(this);
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

    componentDidMount() {
        sendFileRequest(this.props.url,this.props.setFilesParams);
    }

    createFileItem = () => {
        const fileItemArray = [];
        const {fileList,pathsToImg,url,setFilesParams} = this.props;
        for (let i = 0; i < fileList.length; i++) {
            const name = `Name : ${fileList[i].name}`;
            const size = `Size : ${fileList[i].size} MB`;
            const path = `Path : ${fileList[i].path}`;
            const pathToImg = pathsToImg[i];
            const fileItem = <FileItem name={name} size={size} path={path} pathToImg={pathToImg} url={url} setFilesParams={setFilesParams}/>
            fileItemArray.push(fileItem);
        }
        return fileItemArray;
    }
}

export default MainPage;