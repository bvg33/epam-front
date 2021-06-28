import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import styles from './style/HeaderStyle.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Menu globalState={props.globalState}/>
        </div>
    )
}

export default Header