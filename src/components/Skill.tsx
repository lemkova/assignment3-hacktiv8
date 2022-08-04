import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export default class Skill extends Component<{name: string}, {}> {
  render() {
    return (
        <h1 className='mt-2'><span className="text-green-400"><FontAwesomeIcon icon={faCheckCircle} /></span> {this.props.name}</h1>
    )
  }
}
