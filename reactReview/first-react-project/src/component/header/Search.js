import React, {Component} from "react";
import styles from './style/SearchStyle.module.css'
import {withRouter} from "react-router-dom";
import classNames from "classnames/bind";
import locale from "../../localization/Locale";

const search = () => {
    return (
        <div className={styles.search}>
            <input placeholder={locale.findFile} className={styles.searchField}/>
            <button className={styles.searchButton}>
                {locale.search}
                <span className={classNames('material-icons', styles.searchIcon)}>search</span>
            </button>
        </div>
    )
}

export default withRouter(search);