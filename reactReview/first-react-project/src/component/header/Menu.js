import React, {Component} from "react";
import styles from './style/MenuStyle.module.css'
import {withRouter} from 'react-router-dom';
import locale from "../../localization/Locale";
import classNames from "classnames/bind";
import {goOutFromFolder, logOut} from "../../redux/creator/GlobalStateActionCreator";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.arrowButton = this.arrowButton.bind(this);
        this.logoutButtonClicked = this.logoutButtonClicked.bind(this);
    }

    render() {
        return (
            <div className={styles.menu}>
                <span className={classNames('material-icons', styles.favourite)}>favorite_border</span>
                <span onClick={this.arrowButton} className={classNames('material-icons', styles.arrow)}>arrow_back</span>
                <button className={styles.logoutButton} onClick={this.logoutButtonClicked}>{locale.logout}</button>
            </div>
        )
    }

    logoutButtonClicked() {
        const action = logOut();
        this.props.globalState.dispatch(action);
    }

    arrowButton() {
        const action = goOutFromFolder();
        this.props.globalState.dispatch(action);
    }

}

export default withRouter(Menu);