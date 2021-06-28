
const initialParams = {
    url: '/files/getFile'
}
export const globalStateReducer = (state = initialParams, action) => {
    switch (action.type) {
        case 'ENTER-FOLDER': {
            enterFolder(state,action.name);
            return state;
        }
        case 'GO-OUT-FROM-FOLDER': {
            goOutFromFolder(state);
            return state;
        }
        case 'LOGOUT':{
            state.url = '/files/getFile';
            return state;
        }
        default:
            return state;
    }
}
const enterFolder = (state, folderName) => {
    let name = folderName.split(' ')[2];
    let url = state.url;
    let splitUrl = url.split('/');
    if (splitUrl.length === 3) {
        name = name.substring(0, 1);
        url = `${url}/${name}`
    } else {
        splitUrl = url.split('?')
        let character = splitUrl.length < 2 ? '?' : '&';
        url = `${url}${character}folder=${name}`;
    }
    state.url = url;
}
const goOutFromFolder = (state) => {
    let url = state.url;
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
                state.url = splitUrl;
                return;
            }
            state.url = splitUrl[0];
        } else {
            splitUrl.pop();
            splitUrl = splitUrl.join('&');
            state.url = splitUrl;
        }
    }
}