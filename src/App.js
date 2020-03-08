import React from 'react';
import { CardList } from './components/card-list/card-list'
import { Search } from './components/search/search'
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodesk</h1>
        <Search
          handleChange={this.handleSearch}
          placeholder="search monster"
        />
        <CardList monsters={ filteredMonsters } />

      </div>
    );
  }

}

export default App;
