import fileApi from "../api/FileApi";
import folder from './../images/folder.jpg'
import file from './../images/file.png'
import drive from './../images/drive.png'

const initialParams = {
    fileList: [],
    pathsToImg: []
}

export const mainPageReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'SEND-REQUEST': {
            sendRequest(action.url,state,action.dispatch);
            return state;
        }
        default:
            return state
    }
}
const sendRequest = (url,state,dispatch) => {
    fileApi.getFiles(url)
        .then(files => {
            setFileStates(files,state);
            dispatch({type:''});
        });
}

const setFileStates = (fileList,state) => {
    const pathsToImg = [];
    for (let i = 0; i < fileList.length; i++) {
        pathsToImg.push(definePathToImg(fileList[i].type));
    }
    state.fileList = fileList;
    state.pathsToImg = pathsToImg;
}

const definePathToImg = (type) => {
    if (type === 'FOLDER') return folder;
    if (type === 'DRIVE') return drive;
    if (type === 'FILE') return file;
}