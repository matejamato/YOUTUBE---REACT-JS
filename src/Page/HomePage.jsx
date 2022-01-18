import React, { Component } from "react";
import Header from "../Components/Header/Header.jsx";
import Card from "../Components/Card/Card.jsx";
import Iframe from "../Components/Iframe/Iframe.jsx";
import "./home-page.css"

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header searchValue={this.props.searchValue} clickButton={this.props.clickButton} />
               {this.props.iFrame && <Iframe iFrame={this.props.iFrame}></Iframe>}
                <div className="klip">{this.props.data.map((e,i)=><Card image={e.snippet.thumbnails.medium.url} title={e.snippet.title} description={e.snippet.description} id={e.id.videoId} setIframe ={this.props.setIframe} key={i}/>)}</div>
            </div>
        )
    }
}
 
export default HomePage;