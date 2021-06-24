import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import styles from './style/HeaderStyle.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Search/>
            <Menu/>
        </div>
    )
}

export default Header