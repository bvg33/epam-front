import React, {Component} from "react";
import styles from './style/FileItemStyle.module.css'
import {withRouter} from 'react-router-dom';
import {enterFolder} from "../../redux/creator/GlobalStateActionCreator";
class FileItem extends Component {
    constructor(props) {
        super(props);
        this.openButtonClicked = this.openButtonClicked.bind(this);
    }

    render() {
        return (
            <div className={styles.file}>
                <img src={this.props.pathToImg} height="90"/>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.path}</p>
                    <p>{this.props.size}</p>
                    <button onClick={this.openButtonClicked} className={styles.openFolderButton}>Open</button>
                </div>
            </div>
        );
    }

    openButtonClicked() {
        const action = enterFolder(this.props.name);
        this.props.globalState.dispatch(action);
    }
}

export default withRouter(FileItem);