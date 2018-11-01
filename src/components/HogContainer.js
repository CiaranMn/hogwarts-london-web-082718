import React, { Component } from 'react'

import HogCard from './HogCard'

class HogContainer extends Component {

  sendSort = (event) => {
    this.props.sortRequest(event.target.value)
    console.log(event.target.value)
  }

  render() {
    console.log(this.props.hogList)
    return <div>Sort by:
            <select onChange={this.sendSort} default="Unselected">
              <option value=''>Choose a sort method</option>
              <option value='name'>Name</option>
              <option value='weight'>Weight</option>
            </select><br />
            <input type="checkbox" onChange={this.props.showGreased} />Greasy only?
            {this.props.hogList.map(hog => 
            <HogCard hog={hog} />)}
          </div>
    
  }

}

export default HogContainer

