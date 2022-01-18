import React, { Component } from "react";
import HomePage from "./Page/HomePage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchValue = this.searchValue.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.setIframe = this.setIframe.bind(this)

    this.state = { 
      data: [],
      isVideoSelected: false,
      searchValue: "",
      isButtonClicked: false
     }
  }

fetchData () {
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyAOzECROKfyokMUW8AIdB29ZkLXfTCFWwE&q=${this.state.searchValue}`)
  .then((res) => res.json())
  .then((res) => this.setState({ data: res.items }));
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.isButtonClicked !== this.state.isButtonClicked){
    this.fetchData()
  }
}
  setIframe (id){
    this.setState({
      isVideoSelected: id
    })
  }
  searchValue(e){
    this.setState({
      searchValue: e
    })
  }
  clickButton(){
    this.setState({
      isButtonClicked: true
    })
  }
  render() { 
    return ( 
      <div>
        <HomePage iFrame={this.state.isVideoSelected} data={this.state.data} searchValue={this.searchValue} clickButton={this.clickButton} setIframe={this.setIframe}/>
      </div>
     );
  }
}
 
export default App;