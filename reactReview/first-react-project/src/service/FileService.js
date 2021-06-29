import fileApi from "../api/FileApi";
import folder from "../images/folder.jpg";
import drive from "../images/drive.png";
import file from "../images/file.png";

export const enterFolder = (url, folderName, setFilesParams) => {
    let name = folderName.split(' ')[2];
    let splitUrl = url.split('/');
    if (splitUrl.length === 3) {
        name = name.substring(0, 1);
        url = `${url}/${name}`
    } else {
        splitUrl = url.split('?')
        let character = splitUrl.length < 2 ? '?' : '&';
        url = `${url}${character}folder=${name}`;
    }
    sendFileRequest(url, setFilesParams);
}
export const goOutFromFolder = (url, setFilesParams) => {
    if (url != null) {
        let splitUrl = url.split('&');
        if (splitUrl.length < 2) {
            splitUrl = splitUrl[0].split('?')
            if (splitUrl.length < 2) {
                splitUrl = splitUrl[0].split('/');
                splitUrl.pop();
                if (splitUrl.length < 3) {
                    return;
                }
                splitUrl = splitUrl.join('/');
                sendFileRequest(splitUrl, setFilesParams)
                return;
            }
            sendFileRequest(splitUrl[0], setFilesParams)
        } else {
            splitUrl.pop();
            splitUrl = splitUrl.join('&');
            sendFileRequest(splitUrl, setFilesParams)
        }
    }
}
export const sendFileRequest = (url, setFilesParams) => {
    fileApi.getFiles(url)
        .then(files => {
            setFileStates(files, setFilesParams, url);
        });
}

const setFileStates = (fileList, setFilesParams, url) => {
    const pathsToImg = [];
    for (let i = 0; i < fileList.length; i++) {
        pathsToImg.push(definePathToImg(fileList[i].type));
    }
    setFilesParams(fileList, pathsToImg, url);
}

const definePathToImg = (type) => {
    if (type === 'FOLDER') return folder;
    if (type === 'DRIVE') return drive;
    if (type === 'FILE') return file;
}
export const doLogout = () => {
    const url = '/files/getFile';
    sendFileRequest(url);
}