import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';


class App extends Component {

  state = {
    sort: 'name',
    filteredByGreased: false,
    showHogs: hogs
  }

  sortRequest = type => {
    console.log(type)
    type === 'name' ? this.sortByName() : this.sortByWeight()
  }

  sortByName = () => {
    this.setState( prevState => ( { 
      showHogs: prevState.showHogs.sort( (a, b) =>
        a.name.localeCompare(b.name))
    } ))
  }

  sortByWeight = () => {
    console.log('about to sort')
    this.setState(prevState => ({
      showHogs: prevState.showHogs.sort( (a, b) => 
        a.weight - b.weight ) 
    } ))
  }

  toggleGreased = () => {
    this.setState({
      filteredByGreased: this.state.filteredByGreased ? false : true
    }, this.filterGreased )
  }

  filterGreased = () => {
    console.log(this.state.filteredByGreased)
    this.setState({
      showHogs: this.state.filteredByGreased ? 
      this.state.showHogs.filter(hog => hog.greased) 
      : 
      hogs
    })
  }
  
  
  render() {

    return (
      <div className="App">
          <Nav /> 
          <HogContainer hogList={this.state.showHogs} 
                        sortRequest={this.sortRequest} 
                        showGreased={this.toggleGreased}/>
      </div>
    )
  }
}

export default App;
