import React, {Component} from "react";
import styles from './style/SearchStyle.module.css'
import {withRouter} from "react-router-dom";
import classNames from "classnames/bind";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchInput: ''}
        this.changeSearch = this.changeSearch.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.createUrl = this.createUrl.bind(this);
    }

    render() {
        return (
            <div className={styles.search}>
                <input placeholder="Find File" onChange={this.changeSearch} className={styles.searchField}/>
                <button onClick={this.buttonClicked} className={styles.searchButton}>
                    search
                    <span className={classNames('material-icons',styles.searchIcon)}>search</span>
                </button>
            </div>
        )
    }

    changeSearch(event) {
        this.setState({searchInput: event.target.value});
    }

    buttonClicked() {
        if (sessionStorage.getItem('token') === null) {
            alert('Login first');
        } else {
            const url = this.createUrl();
            sessionStorage.setItem('url', url);
            this.props.history.go(0);
        }
    }

    createUrl(){
        let url= sessionStorage.getItem('url');
        url = url.split('/');
        url = url[url.length - 1];
        url = url.substring(0, 1);
        const mask = this.state.searchInput;
        return `files/search/${url}?mask=${mask}`;
    }
}

export default withRouter(Search);