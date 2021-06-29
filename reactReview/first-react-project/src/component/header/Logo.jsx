import React, {Component} from "react";
import epamLogo from '../../images/logoEpam.png'
import styles from './style/LogoStyle.module.css'

const Logo = () => {
    const height = 100;
    return (
        <div className={styles.logo}>
            <img src={epamLogo} height={height}/>
        </div>
    )
}

export default Logo