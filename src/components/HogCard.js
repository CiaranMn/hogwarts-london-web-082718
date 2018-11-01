import React from 'react'
import HogDetails from './HogDetails'

class HogCard extends React.Component { 
  state = {
    selected: false
  }

  selectHog = () => {
    this.setState({selected: this.state.selected ? false : true })
  } 

  slug = () => {
    return this.props.hog.name.replace(" ", "_").toLowerCase()
  }

  render() {
    return <div onClick={this.selectHog} className="ui eight wide column">
            <h3>{this.props.hog.name}</h3>
            <img src={process.env.PUBLIC_URL + '/hog-imgs/' + this.slug() + '.jpg'}
            alt="pig"></img>
            {this.state.selected ? <HogDetails hog={this.props.hog}/> : null}
          </div>

  }
}

export default HogCard