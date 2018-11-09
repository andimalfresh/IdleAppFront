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
    const passLiq = this.state.productList.map((item, i) => {
      return <Products key={i} info={item} />;
    });
    return (
      <div className="App">
        <Navbar />
        <img className="logoImg" src={require("./iwlogo.jpg")} />
        {passLiq}
      </div>
    );
  }
}

export default App;
