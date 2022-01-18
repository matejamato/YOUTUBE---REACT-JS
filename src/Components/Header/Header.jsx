import React, { Component } from "react";
import "./header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="header">
                <div className="logo">
                <img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" alt="logooo"></img>
                </div>
            <div className="input">
                <input onChange={(e)=>this.props.searchValue(e.target.value)} type="text" placeholder="Search" name="search"/>
                <button onClick={this.props.clickButton}>Search</button>
            </div>
        </div>
         );
    }
}
 
export default Header;