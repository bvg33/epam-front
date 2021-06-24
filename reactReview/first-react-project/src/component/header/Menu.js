import React, {Component} from "react";
import styles from './style/MenuStyle.module.css'
import {withRouter} from 'react-router-dom';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.enterFolder = this.enterFolder.bind(this);
        this.arrowButton = this.arrowButton.bind(this);
        this.logoutButtonClicked = this.logoutButtonClicked.bind(this);
    }

    render() {
        const favouriteClass = `material-icons ${styles.favourite}`;
        const arrowClass = `material-icons ${styles.arrow}`;
        return (
            <div className={styles.menu}>
                <span className={favouriteClass}>favorite_border</span>
                <span onClick={this.arrowButton} className={arrowClass}>arrow_back</span>
                <button className={styles.logoutButton} onClick={this.logoutButtonClicked}>Logout</button>
            </div>
        )
    }

    logoutButtonClicked() {
        sessionStorage.removeItem('url');
        sessionStorage.removeItem('token');
        this.props.history.push('/login');
    }

    arrowButton() {
        let url = sessionStorage.getItem('url');
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
                    this.enterFolder(splitUrl);
                    return;
                }
                this.enterFolder(splitUrl[0]);
            } else {
                splitUrl.pop();
                splitUrl = splitUrl.join('&');
                this.enterFolder(splitUrl)
            }
        }
    }

    enterFolder(url) {
        sessionStorage.setItem('url', url);
        this.props.history.go(0);
    }
}

export default withRouter(Menu);