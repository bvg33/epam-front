import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import styles from './style/HeaderStyle.module.css'
import {MenuContainer} from "./MenuContainer";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <Logo/>
            {props.token!==''?<Search/>:''}
            {props.token!==''?<MenuContainer/>:''}
        </div>
    )
}

export default Header