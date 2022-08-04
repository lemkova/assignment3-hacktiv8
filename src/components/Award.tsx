import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'


export default class Award extends Component<{name: string}, {}> {
  render() {
    return (
        <h1 className='mt-2 text-xl'><span className="text-green-400"><FontAwesomeIcon icon={faAward} /></span> {this.props.name}</h1>
    )
  }
}
