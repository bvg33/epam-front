import React, {Component} from "react";
import styles from './style/FileItemStyle.module.css'
import {withRouter} from 'react-router-dom';

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
        let name = this.props.name.split(' ')[2];
        let url = sessionStorage.getItem('url');
        let splitUrl = url.split('/');
        if (splitUrl.length === 3) {
            name = name.substring(0, 1);
            url = `${url}/${name}`
        } else {
            splitUrl = url.split('?')
            let character = splitUrl.length < 2 ? '?' : '&';
            url = `${url}${character}folder=${name}`;
        }
        sessionStorage.setItem('url', url);
        this.props.history.go(0);
    }
}

export default withRouter(FileItem);