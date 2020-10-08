import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  onInputChange = (e) => {
    this.setState({searchField:e.target.value});
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  monsterRenderHelper() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter((ele)=>ele.name.toLowerCase().includes(searchField.toLowerCase()));
    return <CardList monsters={filteredMonsters}></CardList>;
  }
  render() {
    return (
      <div className="App">
        <h1>Monsters Rolatex</h1>
        <SearchBox placeHolder="Search monsters" searchField={this.state.searchField} onInputChange={this.onInputChange}/>
        {this.monsterRenderHelper()}
      </div>
    );
  }
}

export default App;
