import React from 'react'

const HogDetails = (props) => 
  <div>
    <p>Speciality: {props.hog.specialty}</p>
    <p>Greased: {props.hog.greased.toString()}</p>
    <p>Weight: {props.hog.weight}</p>
    <p>Highest Medal Achieved: {props.hog['highest medal achieved']}</p>
  </div>

export default HogDetails