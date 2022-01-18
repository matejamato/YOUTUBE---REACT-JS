import React, { Component } from "react";
import "./card.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="pojedinacni">
                <img src={this.props.image} alt="slika"/>
                <h2 onClick={()=>{this.props.setIframe(this.props.id)}}>
                    {this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
         );
    }
}
 
export default Card;