import React, {Component} from "react";
import styles from './style/SearchStyle.module.css'
import {withRouter} from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchInput: ''}
        this.changeSearch = this.changeSearch.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    render() {
        const searchClass = `material-icons ${styles.searchIcon}`
        return (
            <div className={styles.search}>
                <input placeholder="Find File" onChange={this.changeSearch} className={styles.searchField}/>
                <button onClick={this.buttonClicked} className={styles.searchButton}>
                    search
                    <span className={searchClass}>search</span>
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
            let url= sessionStorage.getItem('url');
            url = url.split('/');
            url = url[url.length - 1];
            url = url.substring(0, 1);
            const mask = this.state.searchInput;
            url = `files/search/${url}?mask=${mask}`;
            sessionStorage.setItem('url', url);
            this.props.history.go(0);
        }
    }
}

export default withRouter(Search);