import React, {Component} from "react";
import epamLogo from '../../images/logoEpam.png'
import styles from './style/LogoStyle.module.css'

const height = 100;
const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={epamLogo} height={height}/>
        </div>
    )
}

export default Logo