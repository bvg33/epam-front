const initialParams = {
    url: '/files/getFile',
    fileList: [],
    pathsToImg: []
}
export const fileStateReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'SET-FILES': {
            return {...state, fileList: action.fileList, pathsToImg: action.pathsToImg, url: action.url};
        }
        default:
            return state;
    }
}