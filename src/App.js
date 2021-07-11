import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (evt) => {
    this.setState(
      (prevstate, prevProps) => {
        return { searchField: evt.target.value };
      },
      () => console.log(this.state.searchField)
    );
    // this.setState({ searchField: evt.target.value, title: evt.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((f) =>
      f.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Axies Pochos</h1>
        <SearchBox
          placeholder="Buscar"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
