import React, {Component} from "react";
import FileItem from "./FileItem";
import style from './style/MainPageStyle.module.css'
import folder from './../../images/folder.jpg'
import file from './../../images/file.png'
import drive from './../../images/drive.png'
import fileApi from "../../api/FileApi";


if (sessionStorage.getItem('url') == null) {
    sessionStorage.setItem('url', '/files/getFile');
}

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.createFileItem = this.createFileItem.bind(this);
        this.setFileStates = this.setFileStates.bind(this);
        this.definePathToImg = this.definePathToImg.bind(this);
        this.state = {
            itemNumber: 0,
            names: [],
            paths: [],
            sizes: [],
            pathsToImg: []
        }
    }

    render() {
        const fileItemArray = this.createFileItem();
        return (
            <div className={style.allFiles}>
                <div className={style.fileBlock}>
                    {fileItemArray.map(row => (<div>{row}</div>))}
                </div>
            </div>
        );
    }


    componentDidMount() {
        const url = sessionStorage.getItem('url');
        fileApi.getFiles(url)
            .then(files => this.setFileStates(files));
    }


    setFileStates = (fileList) => {
        const filesNames = Array.from(fileList, file => file["name"]);
        const filesPaths = Array.from(fileList, file => file["path"]);
        const filesSizes = Array.from(fileList, file => file["size"]);
        const types = Array.from(fileList, file => file["type"]);
        const size = fileList.length;
        const filePathsToImg = [size];
        for (let i = 0; i < size; i++) {
            filePathsToImg[i] = this.definePathToImg(types[i]);
        }
        this.setState({itemNumber: size,names:filesNames,sizes:filesSizes,paths:filesPaths,pathsToImg:filePathsToImg});
    }

    definePathToImg = (type) => {
        if (type === 'FOLDER') {
            return folder;
        }
        if (type === 'DRIVE') {
            return drive;
        }
        if (type === 'FILE') {
            return file;
        }
    }

    createFileItem = () => {
        const length = this.state.itemNumber;
        const fileItemArray = new Array(length)
        for (let i = 0; i <length; i++) {
            let name = `Name : ${this.state.names[i]}`;
            let size = `Size : ${this.state.sizes[i]} MB`;
            let path = `Path : ${this.state.paths[i]}`;
            let pathToImg = this.state.pathsToImg[i];
            fileItemArray.push(<FileItem name={name} size={size} path={path} pathToImg={pathToImg}/>);
        }
        return fileItemArray;
    }
}

export default MainPage;