import React, {Component} from "react";
import FileItem from "./FileItem";
import style from './style/MainPageStyle.module.css'
import folder from './../../images/folder.jpg'
import file from './../../images/file.png'
import drive from './../../images/drive.png'
import FileApi from "../../api/FileApi";


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
        const arr = this.createFileItem();
        return (
            <div className={style.allFiles}>
                <div className={style.fileBlock}>
                    {arr.map((row) => (<div>{row}</div>))}
                </div>
            </div>
        );
    }


    componentDidMount() {
        const url = sessionStorage.getItem('url');
        const fileApi = new FileApi();
        fileApi.getFiles(url)
            .then(files => this.setFileStates(files));
    }


    setFileStates = (fileList) => {
        const names = Array.from(fileList, file => file["name"]);
        const paths = Array.from(fileList, file => file["path"]);
        const sizes = Array.from(fileList, file => file["size"]);
        const types = Array.from(fileList, file => file["type"]);
        const size = fileList.length;
        for (let i = 0; i < size; i++) {
            this.state.names.push(names[i]);
            this.state.paths.push(paths[i]);
            this.state.sizes.push(sizes[i]);
            let pathToImg = this.definePathToImg(types[i]);
            this.state.pathsToImg.push(pathToImg);
        }
        this.setState({itemNumber: size});
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
        const arr = new Array(this.state.itemNumber)
        for (let i = 0; i < arr.length; i++) {
            let name = `Name : ${this.state.names[i]}`;
            let size = `Size : ${this.state.sizes[i]} MB`;
            let path = `Path : ${this.state.paths[i]}`;
            let pathToImg = this.state.pathsToImg[i];
            arr[i] = <FileItem name={name} size={size} path={path} pathToImg={pathToImg}/>;
        }
        return arr;
    }
}

export default MainPage;