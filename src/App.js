import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  async componentDidMount() {
    let responce = await fetch("http://localhost:3001/");
    let json = await responce.json();
    console.log("jsonlog", json);
    this.setState({
      productList: json.data
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Products liquors={this.productList} />
      </div>
    );
  }
}

export default App;
